import React from 'react';
import useReview from '../hooks/useReview';
import './Review.css'

const Review = () => {
    const [reviews] = useReview();
    return (
        <div className='review-section'>
            {
                reviews.map(review => <div key={review.id} className='home-review-section'>
                    <img src={review.img} alt="" />
                    <h5>{review.name}</h5>
                    <p><small>Rating: {review.review}</small></p>
                    <p>{(review.text).slice(0, 150)}...</p>
                </div>)
            }
        </div>
    );
};

export default Review;