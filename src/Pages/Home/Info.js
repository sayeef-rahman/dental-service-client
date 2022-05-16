import React from 'react';
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg'
import marker from '../../assets/icons/marker.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div>
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={phone}></InfoCard>
            <InfoCard img={marker}></InfoCard>
        </div>
    );
};

export default Info;