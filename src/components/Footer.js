import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="py-3">
                <div className="container.xxl">
                    <div className="row">
                        <div className="col-3">
                            <h6 className="mb-4 black-link"> CONNECT WITH US </h6>
                            <div>
                                <a
                                    href="tel:+16828470427"
                                    className="mt-4 d-block mb-2 black-link"
                                >
                                    {" "}
                                    (682) 847-0427{" "}
                                </a>
                                <a
                                    href="mailto:vintagevolumes@gmail.com"
                                    className="mt-4 d-block mb-2 black-link"
                                >
                                    {" "}
                                    vintagevolumes@gmail.com{" "}
                                </a>
                            </div>
                            <div className="d-flex align-items-center gap-30 mt-4">
                                <a href="#" className="black-link">
                                    {" "}
                                    <BsFacebook className="fs-4" />{" "}
                                </a>
                                <a href="#" className="black-link">
                                    {" "}
                                    <BsInstagram className="fs-4" />{" "}
                                </a>
                                <a href="#" className="black-link">
                                    {" "}
                                    <BsTwitter className="fs-4" />{" "}
                                </a>
                            </div>
                        </div>
                        <div className="col-3">
                            <h6 className="mb-4 black-link"> PRIVACY AND TERMS </h6>
                            <div className="footer-links d-flex flex-column">
                                <Link className="black-link py-2 mb-1"> Privacy Policy </Link>
                                <Link className="black-link py-2 mb-1">
                                    {" "}
                                    Returns $ Exchanges{" "}
                                </Link>
                                <Link className="black-link py-2 mb-1"> Shipping Policy </Link>
                                <Link className="black-link py-2 mb-1">
                                    {" "}
                                    Terms & Conditions{" "}
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h6 className="mb-4 black-link"> CUSTOMER SERVICE </h6>
                            <div className="footer-links d-flex flex-column">
                                <Link className="black-link py-2 mb-1"> About Us </Link>
                                <Link className="black-link py-2 mb-1"> FAQs </Link>
                                <Link className="black-link py-2 mb-1"> Contact </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h6 className="mb-4 black-link"> BE THE FIRST ONE TO KNOW! </h6>
                            <p>
                                {" "}
                                Sign up to our newsletters and receive the latest exclusive
                                discounts and deals.{" "}
                            </p>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Enter Your Email..."
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text py-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer-bottom py-4">
                <div className="container.xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0">
                                &copy; {new Date().getFullYear()}; Vintage Volumes. All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
