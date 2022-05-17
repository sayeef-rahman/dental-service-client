import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.review}</p>
                <div className='flex mt-5'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} />
                        </div>
                    </div>
                    <h2 class="card-title ml-6">{review.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;