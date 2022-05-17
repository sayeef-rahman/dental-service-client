import React from 'react';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            _id: 2,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            _id: 3,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        }
    ]
    return (
        <div className='mx-10 lg:pl-10'>
            <div className='text-center mt-20'>
                <p className='text-primary font-bold text-xl'>OUR SERVICES</p>
                <p className='text-3xl'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >
                    </Service>
                    )
                }
            </div>
        </div >
    );
};

export default Services;