import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo-text d-flex align-items-center">
                <img src={logo} alt="" />
                <span>FITRONIC</span>
            </div>
        </div>
    );
};

export default Header;