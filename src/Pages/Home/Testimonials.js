import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Sayeef Rahman',
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis id aperiam dolorem est ab minus cum nam illo dolorum commodi.',
            img: people1
        },
        {
            _id: 2,
            name: 'Sayeef Rahman',
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis id aperiam dolorem est ab minus cum nam illo dolorum commodi.',
            img: people2
        },
        {
            _id: 3,
            name: 'Sayeef Rahman',
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis id aperiam dolorem est ab minus cum nam illo dolorum commodi.',
            img: people3
        }
    ]
    return (
        <section className='lg:mx-14 mt-16 mb-20'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-secondary font-bold text-xl'>Tesimonials</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div className=''>
                    <img src={quote} className=' w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-8'> 
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    >

                    </Review>)
                }
            </div>
        </section>

    );
};

export default Testimonials;