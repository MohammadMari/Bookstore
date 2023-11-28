import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '../App.css'

const Layout = () => {
    return (
      <div className="layout">
        <div className="content-wrap">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default Layout;