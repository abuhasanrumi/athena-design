import React from 'react';
import projectImg from '../../../Utility/Illustration/projectImg.png'
import './ProjectArea.css'

const ProjectArea = () => {
    return (
        <div className="projectArea">
            <div className="container py-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 pr-md-4 py-4 projectImg order-1 order-md-0">
                        <img className="img-fluid" src={projectImg} alt="" />
                    </div>
                    <div className="col-md-6 pl-md-5 order-0 order-md-1">
                        <div className="projectDetails">
                            <h3 className="brand-color projectTitle">STAY RUNNING &amp; Project</h3>
                            <p className="brand-fade py-3">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.
                            </p>
                            <a className="brand-btn py-3 px-5  nav-link" href="#">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectArea;