import React from 'react';
import './AchievementArea.css'
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AchievementArea = () => {
    return (
        <div className="achievevmentArea">
            <div className="container py-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 py-4">
                        <div className="projectDetails">
                            <h3 className="brand-color projectTitle">Our Achievements</h3>
                            <p className="brand-fade py-3">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The
                                point of using Lorem Ipsum is that it has a more-or-less normal
                                distribution of letter.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 py-4">
                        <div className="row achievement-cards ">
                            <div className="col-md-6 achievement-card-wrapper py-3">
                                <div className="card single-achievement achievement1 d-flex justify-content-center flex-row align-items-center p-3">
                                    <div className="achievementImg pr-4"><FontAwesomeIcon icon={faLaughBeam} /></div>
                                    <div className="card-body p-0 d-inline-block">
                                        <h5 className="card-title achievementTitle m-0">700+</h5>
                                        <p className="card-text achievementText">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 achievement-card-wrapper py-3">
                                <div className="card single-achievement achievement2 d-flex justify-content-center flex-row align-items-center p-3">
                                    <div className="achievementImg pr-4"><FontAwesomeIcon icon={faLaughBeam} /></div>
                                    <div className="card-body p-0 d-inline-block">
                                        <h5 className="card-title achievementTitle m-0">140+</h5>
                                        <p className="card-text achievementText">Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 achievement-card-wrapper py-3">
                                <div className="card single-achievement achievement2 d-flex justify-content-center flex-row align-items-center p-3">
                                    <div className="achievementImg pr-4"><FontAwesomeIcon icon={faLaughBeam} /></div>
                                    <div className="card-body p-0 d-inline-block">
                                        <h5 className="card-title achievementTitle m-0">25+</h5>
                                        <p className="card-text achievementText">Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 achievement-card-wrapper py-3">
                                <div className="card single-achievement achievement1 d-flex justify-content-center flex-row align-items-center p-3">
                                    <div className="achievementImg pr-4"><FontAwesomeIcon icon={faLaughBeam} /></div>
                                    <div className="card-body p-0 d-inline-block">
                                        <h5 className="card-title achievementTitle m-0">75+</h5>
                                        <p className="card-text achievementText">Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementArea;