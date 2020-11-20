import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../Utility/Illustration/logo.png'
import { faFacebook, faTwitter, faLinkedin, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


const Footer = () => {
    return (
        <div className="footerArea py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4">
                        <img className="img-fluid logo" src={logo} alt="" />
                        <ul className="list-unstyled m-0 p-0 social-icons mt-4">
                            <li><a className="" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faBehance} /></a></li>
                        </ul>
                    </div>
                    <div className="col-md-8 mt-4">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-menu mb-3">
                                    <ul>
                                        <li><a href="#">Features</a></li>
                                        <li><a href="#">Enterprise</a></li>
                                        <li><a href="#">Pricing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-menu mb-3">
                                    <ul>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Status</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-menu mb-3">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Security</a></li>
                                        <li><a href="#">Login</a></li>
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

export default Footer;