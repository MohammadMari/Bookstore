import React from "react";
import { useAuth } from "./pages/auth";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/signup";
import Cart from "./pages/cart";
import Book from "./pages/books";
import NotFound from "./pages/NotFound";
import Shop from "./pages/shop";

const WrappedRoutes = () => {
  const user = useAuth();
  const routes = [
    { path: "/", element: <Home /> },
    { path: "books", element: <Book /> },
    { path: "cart", element: <Cart /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "shop", element: <Shop /> },
  ];

  if (user.user) {
    routes.push(
    { path: "wishlist", element: <Wishlist /> },
    )
  }
  else {
    routes.push(
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default WrappedRoutes;
