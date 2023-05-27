import React, { useState } from 'react';
import UserImg from '../../images/user.jpg';
import './UserInfo.css';

const TimeCounts = (props) => {
    const {timeCount} = props;
    const[breakTime, setBreakTime]= useState(' 0 ');
    console.log(breakTime);
    const handleClick = (event) =>{
        localStorage.setItem('break-time', event.target.innerText);
        setBreakTime(localStorage.getItem('break-time'));
    }
    return (
        <div className='user-container'>
            <div className="user-info">
                <img src={UserImg} alt="" className='user-img'/>
                <div>
                    <h5>Shanta Islam</h5>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-4 user-info-details'>
                <div>
                    <h5>48<sub>kg</sub></h5>
                    <p>Weight</p>
                </div>
                <div>
                    <h5>5.2</h5>
                    <p>Height</p>
                </div>
                <div>
                    <h5>27<sub>yrs</sub></h5>
                    <p>Age</p>
                </div>
                
                
            </div>
            <div className="mt-4">
                <h5>Add A Break</h5>
                <div className='break-time-buttons d-flex justify-content-between'>
                    <button className='btn d-flex justify-content-center aligns-item-center' onClick={handleClick}>10m</button>
                    <button className='btn d-flex justify-content-center aligns-item-center' onClick={handleClick}>20m</button>
                    <button className='btn d-flex justify-content-center aligns-item-center' onClick={handleClick}>30m</button>
                    <button className='btn d-flex justify-content-center aligns-item-center' onClick={handleClick}>40m</button>
                </div>
            </div>
            <div className="mt-4">
                <h5>Exercise Details</h5>
                <div className='details-bg d-flex justify-content-between mt-4'>
                    <h6>Exercise Time</h6>
                    <div>{timeCount} Minutes</div>
                </div>
                <div className='details-bg d-flex justify-content-between mt-4'>
                    <h6>Break Time</h6>
                    <div>{localStorage.getItem("break-time")} Minutes</div>
                </div>
            </div>
            <div className='mt-4'>
                <button className='btn activity-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default TimeCounts;