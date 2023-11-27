import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/signup';
import Cart from './pages/cart';
import Book from './pages/books';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="Login" element={<Login />} />
          <Route path="signup" element={<SignUp />} /> {'./pages/SignUp'}
          <Route path="cart" element={<Cart />} />
          <Route path="books" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
