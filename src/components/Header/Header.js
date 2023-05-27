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
            <h3 className='mt-5'>Select today's exercise</h3>
        </div>
    );
};

export default Header;