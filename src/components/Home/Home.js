import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../hooks/useReview';
import './Home.css'

const Home = () => {
    const [reviews] = useReview();

    return (
        <div className='home'>
            <div className='home-container'>
                <div className='heading'>
                    <h3>Guiter Paradice</h3>
                    <h4>Pick your awesome guiters</h4>
                    <p>Guiter Paradise is the world's largest musical instrument retailer, with the greatest selection of guitars, basses, keyboards, drums and percussion, as well as studio gear, live sound and lighting equipment.</p>
                    <p>We are happy to serve customers worldwide, and because of our strong relationships with the top musical instrument brands, we can offer you the best gear at a great low price.</p>
                    <button className='live-btn'>LIVE DEMO</button>
                </div>
                <img src="https://fsa.zobj.net/crop.php?r=Zzb9QGPeQZkVbgbpUTuBxHYEhcxJu4REz4_kOhZa9GFO-loLMt0IKwAr6Xmr5v7c8VmXWbTTaWE4Y4uJakOEV2AQvpgDT4yqcvX8KbBfjrUVljoBU-Bzg8a2nPFPHZdu3jzJP6D6QrUE_cZ8oJO33BM_RPjRYu-cBnQeELQBo62mVx7-2ioEOESxOQ7luyMV9_lYxl1dqAkUp5bu" alt="" />
            </div>
            <div className='all-review-container'>
                <h3>Customer Reviews({reviews.length})</h3>
                <div className='review-section'>
                    {
                        reviews.slice(0, 3).map(review => <div key={review.id} className='home-review-section'>
                            <img src={review.img} alt="" />
                            <h5>{review.name}</h5>
                            <p><small>Rating: {review.review}</small></p>
                            <p>{(review.text).slice(0, 150)}...</p>
                        </div>
                        )}
                </div>
                <div className='link-review'>
                    <Link to="/review">See All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;