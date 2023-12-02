import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsFillHouseFill,
  BsHeart,
  BsFillPersonFill,
  BsCart,
  BsChatSquare,
} from "react-icons/bs";
import { AuthProvider, useAuth } from "../pages/auth";

const Header = () => {
  const user = useAuth();
  const links = [
    { to: "about", icon: <BsChatSquare className="icon" /> },
    { to: "cart", icon: <BsCart className="icon" /> },
  ];

  if (user.user) {
    links.push({ to: "wishlist", icon: <BsHeart className="icon" /> });
  }
  else {
    links.push({ to: "login", icon: <BsFillPersonFill className="icon" /> });
  }

  return (
    <div>
            <header className="header-top-strip py-3">
                <div className="container.xxl">
                    <div className="row">
                        <p className="black-link mb-0"> LIMITED TIME. FREE SHIPPING & RETURNS ON $50+ PURCHASE. </p>
                    </div>
                </div>
            </header>
      <header className="header-upper py-3">
        <div className="header-row">
          <NavLink to="/">
            <h2 className="black-link"> Vintage Volumes </h2>
          </NavLink>
          <div className="col-3">
            <div className="input-group">
                <BsSearch />
              </span>
            </div>
          </div>
          <div>
            <div className="menu-links">
              <div className="d-flex gap-30">
                {links.map((link) => (
                  <Link className="black-link" to={link.to}>
                    {" "}
                    {link.icon}{" "}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
