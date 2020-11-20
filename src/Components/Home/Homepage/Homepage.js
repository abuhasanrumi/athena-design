import React from 'react';
import Header from '../Header/Header';
import ProjectArea from '../ProjectArea/ProjectArea';
import ServiceArea from '../ServiceArea/ServiceArea';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <ServiceArea></ServiceArea>
            <ProjectArea></ProjectArea>
        </div>
    );
};

export default Homepage;