import React from 'react';
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg'
import marker from '../../assets/icons/marker.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-12'>
            <InfoCard cardTitle={"Opening Hours"} bgClass={"bg-gradient-to-r from-secondary to-primary"} img={clock} text={"Lorem Ipsum is simply dummy text of the pri"} ></InfoCard>

            <InfoCard cardTitle={"Visit Our Location"} bgClass={"bg-accent"} img={marker} text={"Brooklyn, NY 10036, United States"} ></InfoCard>
            
            <InfoCard cardTitle={"Contact US NOW"} bgClass={"bg-gradient-to-r from-secondary to-primary"} img={phone} text={"+000 123 456789"}></InfoCard>
        </div>
    );
};

export default Info;