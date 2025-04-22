require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('express-flash');
const connectToDb = require('./db/db');
const Routes = require('./routes/index');

// Connect to the database
connectToDb();

const app = express();

// ✅ 1. CORS Setup (Allow frontend from env OR localhost:5173)
const allowedOrigins = [process.env.FRONTEND_URL || 'http://localhost:5173'];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow credentials (cookies, session, etc.)
  })
);

// ✅ 2. Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ 3. Session Setup with MongoDB Store (for production safety)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_CONNECT,
      collectionName: 'sessions',
      ttl: 14 * 24 * 60 * 60, // Session expiration time (2 weeks)
    }),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Only set to true in production if using HTTPS
      maxAge: 1000 * 60 * 60 * 24, // Session cookie expiration time (1 day)
    },
  })
);

// Optional: Debug - Log session existence
app.use((req, res, next) => {
  if (!req.session) {
    return next(new Error('Session not initialized!'));
  }
  next();
});

// ✅ 4. Flash Messages Middleware
app.use(flash());

// ✅ 5. Root Route - Redirect to frontend
app.get('/', (req, res) => {
  const redirectUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
  return res.redirect(redirectUrl);
});

// ✅ 6. All Routes
app.use('/', Routes);

// ✅ 7. Global Error Handling (Optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: 'Something went wrong!', error: err.message });
});

module.exports = app;
