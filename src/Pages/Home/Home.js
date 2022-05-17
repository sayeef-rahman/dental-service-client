import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Information from './Information';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Information></Information>
        </div>
    );
};

export default Home;