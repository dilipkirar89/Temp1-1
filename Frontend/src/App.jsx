import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Order from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Search from './components/Search';
import Register from './pages/Register';

const App = () => {
  return (
    <div>
      <Nav />
      <Search />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/orders"
          element={<Order />}
        />
        <Route
          path="/place-order"
          element={<PlaceOrder />}
        />
        <Route
          path="/product/:productId"
          element={<Product />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/collection"
          element={<Collection />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
