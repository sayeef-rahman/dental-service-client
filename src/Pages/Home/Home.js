import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Information from './Information';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Information></Information>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;