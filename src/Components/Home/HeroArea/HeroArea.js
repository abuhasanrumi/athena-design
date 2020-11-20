import React from 'react';
import './HeroArea.css'

import heroImg from '../../../Utility/Illustration/heroImg.png'
const HeroArea = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-5">
                    <h2 className="brand-font hero-title">Florence agency</h2>
                    <p className="m-0 pt-4 brand-fade">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type book.
                    </p>
                    <a class="brand-btn py-3 px-5 mt-4 nav-link" href="#">See pricing</a>
                </div>
                <div className="col-md-7 py-5 pb-md-4 px-md-5">
                    <img className="img-fluid" src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroArea;