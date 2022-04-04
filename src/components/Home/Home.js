import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>
                <div className='heading'>
                    <h3>Guiter Paradice</h3>
                    <p>Guiter Paradise is the world's largest musical instrument retailer, with the greatest selection of guitars, basses, keyboards, drums and percussion, as well as studio gear, live sound and lighting equipment.</p>
                    <p>We are happy to serve customers worldwide, and because of our strong relationships with the top musical instrument brands, we can offer you the best gear at a great low price.</p>
                    <button className='live-btn'>LIVE DEMO</button>
                </div>
                <img src="https://fsa.zobj.net/crop.php?r=Zzb9QGPeQZkVbgbpUTuBxHYEhcxJu4REz4_kOhZa9GFO-loLMt0IKwAr6Xmr5v7c8VmXWbTTaWE4Y4uJakOEV2AQvpgDT4yqcvX8KbBfjrUVljoBU-Bzg8a2nPFPHZdu3jzJP6D6QrUE_cZ8oJO33BM_RPjRYu-cBnQeELQBo62mVx7-2ioEOESxOQ7luyMV9_lYxl1dqAkUp5bu" alt="" />
            </div>
            <div>
                <h3>Customer Review()</h3>
            </div>
        </div>
    );
};

export default Home;