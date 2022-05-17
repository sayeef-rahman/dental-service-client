import React from 'react';
import doctor from '../../assets/images/doctor.png'
import background from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <div>
            <section className='flex justify-center items-center mt-20' style={{backgroundImage: `url(${background})`}}>
                <div className='flex-1'>
                    <img className='mt-[-200px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 lg:mr-20'>
                    <h1 className='text-secondary font-bold'>Appointment</h1>
                    <h1 className='text-white text-4xl my-5'>Make an appointment Today</h1>
                    <p className='text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </section>
        </div>
    );
};

export default MakeAppointment;