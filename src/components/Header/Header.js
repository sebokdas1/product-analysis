import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navlink'>
            <Link to="/home">HOME</Link>
            <Link to="/review">REVIEWS</Link>
            <Link to="/dashboard">DASHBOARD</Link>
            <Link to="/blogs">BLOG</Link>
            <Link to="/about">ABOUT</Link>
        </nav>
    );
};

export default Header;