const express = require('express');
const router = express.Router();
const cors = require('cors');
const authMiddleware = require('../middlewares/auth.middlewares');
const { userRegister, userLogin } = require('../controllers/user.controller');

const {
  registerPatient,
  getAllPatients,
  deletePatient,
} = require('../controllers/patient.controller');
const adminController = require('../controllers/admin.controller');

// Enable CORS
router.use(
  cors({
    origin: process.env.FRONTEND_URL || process.env.LOCAL_URL,
    credentials: true,
  })
);

// Redirect root to frontend
router.get('/', (req, res) => {
  const frontendUrl = process.env.FRONTEND_URL || process.env.LOCAL_URL;
  res.redirect(frontendUrl);
});

// ******** USER ROUTES **********
router.post('/register', userRegister);
router.post('/login', userLogin);

// Logout route for session-based authentication
router.post('/logout', (req, res) => {
  // Destroy the session to log out the user
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Failed to log out' });
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

// ******** ADMIN ROUTES **********
router.post('/adminRegister', adminController.adminRegister);
router.post('/adminLogin', adminController.adminLogin);
router.get('/getAdminDetails', authMiddleware, adminController.getAdminDetails);
router.post('/adminLogout', adminController.adminLogout);

// ********** PATIENT ROUTES **********
router.post('/registerPatient', registerPatient);
router.get('/getAllPatients', getAllPatients);
router.delete('/deletePatient/:id', deletePatient);

module.exports = router;
