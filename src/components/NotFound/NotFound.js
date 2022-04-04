import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='data-error'>
            <div className='not-found'>
                <h2>SORRY, PAGE NOT FOUND</h2>
                <h4>THE PAGE YOU REQUESTED COULD NOT BE FOUND</h4>
            </div>
            <img src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-139814044.jpg" alt="404" />
        </div>
    );
};

export default NotFound;