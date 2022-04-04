import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navlink'>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/home">HOME</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/review">REVIEWS</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/dashboard">DASHBOARD</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/blogs">BLOG</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/about">ABOUT</NavLink>
        </nav>
    );
};

export default Header;