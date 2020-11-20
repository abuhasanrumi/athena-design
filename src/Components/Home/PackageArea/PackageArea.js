import React from 'react';
import './PackageArea.css'

const PackageArea = () => {
    return (
        <div className="packageArea pb-5">
            <div className="container py-5">
                <div className="row mt-4 mb-5">
                    <div className="col-md-8 offset-md-2">
                        <div className="serviceHeading text-center">
                            <h3 className="brand-font pb-3 serviceTitle">Choose Your Dedicated Team</h3>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6 col-lg-4 my-4">
                            <div className="card single-package package1 p-5 text-center ">
                                <div className="package-details">
                                    <div className="card-body p-0 d-inline-block">
                                        <h4 className="card-title packageTitle">$199</h4>
                                        <p className="card-text packageText mb-3">For Basic</p>
                                    </div>
                                </div>
                                <div className="packageList mt-4">
                                    <ul className="m-0 p-0 list-unstyled">
                                        <li>Homepage</li>
                                        <li>No Inner Page</li>
                                        <li>Asset file</li>
                                        <li>Source file</li>
                                        <li>Free Stock Photos </li>
                                        <li>10 Days Free Support</li>
                                        <li>24/7 Support</li>
                                        <li className="mt-4 order-btn"><a className="brand-btn py-3 px-5  nav-link" href="#">Order now</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-4 my-4">
                            <div className="card single-package package2 p-5 text-center ">
                                <div className="package-details">
                                    <div className="card-body p-0 d-inline-block">
                                        <h4 className="card-title packageTitle">$399</h4>
                                        <p className="card-text packageText mb-3">For Preferred</p>
                                    </div>
                                </div>
                                <div className="packageList mt-4">
                                    <ul className="m-0 p-0 list-unstyled">
                                        <li>Homepage</li>
                                        <li>4 Inner Pages</li>
                                        <li>Asset file</li>
                                        <li>Source file</li>
                                        <li>Free Stock Photos </li>
                                        <li>20 Days Free Support</li>
                                        <li>24/7 Support</li>
                                        <li className="mt-4"><a className="brand-btn py-3 px-5  nav-link" href="#">Order now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 my-4">
                            <div className="card single-package package1 p-5 text-center ">
                                <div className="package-details">
                                    <div className="card-body p-0 d-inline-block">
                                        <h4 className="card-title packageTitle">$599</h4>
                                        <p className="card-text packageText mb-3">For Elite</p>
                                    </div>
                                </div>
                                <div className="packageList mt-4">
                                    <ul className="m-0 p-0 list-unstyled">
                                        <li>Homepage</li>
                                        <li>8 Inner Page</li>
                                        <li>Asset file</li>
                                        <li>Source file</li>
                                        <li>Free Stock Photos </li>
                                        <li>30 Days Free Support</li>
                                        <li>24/7 Support</li>
                                        <li className="mt-4 order-btn"><a className="brand-btn py-3 px-5  nav-link" href="#">Order now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageArea;