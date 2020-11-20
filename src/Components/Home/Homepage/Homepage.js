import React from 'react';
import AchievementArea from '../AchievementArea/AchievementArea';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PackageArea from '../PackageArea/PackageArea';
import ProjectArea from '../ProjectArea/ProjectArea';
import ServiceArea from '../ServiceArea/ServiceArea';
import SubscriptionArea from '../SubscriptionArea/SubscriptionArea';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <ServiceArea></ServiceArea>
            <ProjectArea></ProjectArea>
            <AchievementArea></AchievementArea>
            <PackageArea></PackageArea>
            <SubscriptionArea></SubscriptionArea>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;