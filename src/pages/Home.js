import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container.xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img src="images/main-banner.jpg" className="img-fluid rounded-3" alt="main banner" />
                                <div className="main-banner-content position-relative">
                                    <h4>Discover Vintage Reads</h4>
                                    <h5>Timeless Classics and Hidden Gems</h5>
                                    <p>Explore our curated collection of vintage books.</p>
                                    <Link to="/shop" className="button">
                                        Explore Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                {[1, 2, 3, 4].map((index) => (
                                    <div key={index} className="small-banner position-relative">
                                        <img src={`images/catbanner-0${index}.jpg`} className="img-fluid rounded-3" alt={`banner ${index}`} />
                                        <div className="small-banner-content position-absolute">
                                            <h4>Featured Category</h4>
                                            <h5>Engrossing Titles Await</h5>
                                            <p>Find your next literary adventure.</p>
                                            <Link to="/shop" className="button">
                                                Explore
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container.xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service.png" alt="services" />
                                    <div>
                                        <h6> Diverse Collection</h6>
                                        <p className="mb-0"> From classics to rare finds</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-02.png" alt="services" />
                                    <div>
                                        <h6> Exclusive Offers</h6>
                                        <p className="mb-0"> Save on vintage editions</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-04.png" alt="services" />
                                    <div>
                                        <h6> Affordable Prices</h6>
                                        <p className="mb-0"> Explore without breaking the bank</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-03.png" alt="services" />
                                    <div>
                                        <h6> Expert Recommendations</h6>
                                        <p className="mb-0"> Discover personalized picks</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-05.png" alt="services" />
                                    <div>
                                        <h6> Secure Checkout</h6>
                                        <p className="mb-0"> Shop with confidence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
