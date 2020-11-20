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
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="#"><img className="logo" src={logo} alt="" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto d-flex align-items-center">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Services <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Pricing <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Our Team <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="brand-btn py-3 px-5 ml-4 nav-link" href="#">Contact us</a>
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