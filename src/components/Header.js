import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsFillHouseFill, BsHeart, BsFillPersonFill, BsCart, BsChatSquare } from "react-icons/bs";

const Header = () => {
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
                <div className="container.xxl">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="black-link"> Vintage Volumes </h2>
                        </div>
                        <div className="col-3"> </div>
                        <div className="col-3">
                            <div className="menu-links">
                                <div className="d-flex gap-30">
                                    <NavLink className="black-link" to="/"> <BsFillHouseFill className="icon" /> </NavLink>
                                    <NavLink className="black-link" to="/About"> <BsChatSquare className="icon" /> </NavLink>
                                    <Link className="black-link" to="/Wishlist"> <BsHeart className="icon" /> </Link>
                                    <Link className="black-link" to="/Login"> <BsFillPersonFill className="icon" /> </Link>
                                    <Link className="black-link" to="/cart"> <BsCart className="icon" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3"> </div>
                        <div className="col-1"> </div>
                        <div className="col-4">
                            <div className="input-group">
                                <input type="text" className="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
                                <span className="input-group-text py-3" id="basic-addon2">
                                    <BsSearch />
                                </span>
                            </div>
                        </div>
                        <div className="col-1"> </div>
                        <div className="col-3"> </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;