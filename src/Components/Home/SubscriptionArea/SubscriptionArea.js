import React from 'react';
import './SubscriptionArea.css'

const SubscriptionArea = () => {
    return (
        <div className="subscriptionArea">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-8 offset-md-2 mt-5">
                        <div className="serviceHeading text-center">
                            <h3 className="brand-font pb-3 serviceTitle">Get your design right, right now</h3>
                            <p className="m-0 brand-fade">Be the first know our latest offers and updates!</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-8 col-sm-10 col-11 p-2 mx-auto my-5">
                        <form action="" class="position-relative">
                            <input class="inputField" type="text" placeholder="Enter email" />
                            <button class="start-btn">Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionArea;