import React from 'react';
import AchievementArea from '../AchievementArea/AchievementArea';
import Header from '../Header/Header';
import ProjectArea from '../ProjectArea/ProjectArea';
import ServiceArea from '../ServiceArea/ServiceArea';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <ServiceArea></ServiceArea>
            <ProjectArea></ProjectArea>
            <AchievementArea></AchievementArea>
        </div>
    );
};

export default Homepage;