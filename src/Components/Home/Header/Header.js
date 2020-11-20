import React from 'react';
import logo from '../../../Utility/Illustration/logo.png'
import HeroArea from '../HeroArea/HeroArea';
import './Header.css'

const Header = () => {
    return (
        <div className="headerBackground">
            <div className="container ">
                <div className="header py-3">
                    <div className="navigation">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="#"><img className="logo img-fluid" src={logo} alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto d-flex align-items-center">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Services <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Our Team <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="brand-btn py-3 px-5 ml-4 nav-link" href="#">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="heroArea py-5">
                        <HeroArea></HeroArea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;