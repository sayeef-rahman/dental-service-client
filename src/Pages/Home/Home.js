import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Information from './Information';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Information></Information>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;