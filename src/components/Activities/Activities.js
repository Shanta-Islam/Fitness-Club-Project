import React, { useEffect, useState } from 'react';
import './Activities.css';
import SingleActivity from '../SingleActivity/SingleActivity';
import UserInfo from '../UserInfo/UserInfo';
import Header from '../Header/Header';
import QAccordion from '../QAccordion/QAccordion';

const Activities = (props) => {
    const [activities, setActivities] = useState([]);
    const [timeCount, setTimeCount] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setActivities(data));
    }, []);
    const addToList = (activities) =>{
        const totalTime = timeCount + activities.time;
        const parseTime = parseInt(totalTime);
        setTimeCount(parseTime);
    }
    return (
        <div className='body-container'>
            <div className="act-container">
                <Header></Header>
                <div className='act-body mt-5'>
                    {
                        activities.map(act=> <SingleActivity key={act.id} act={act} addToList={addToList}></SingleActivity>)
                    }
                </div>
                <QAccordion></QAccordion>
            </div>
            <div className="time-container">
                <div className='time-info'>
                    <UserInfo timeCount={timeCount} notify={props.notify}></UserInfo>
                </div>
            </div>
            
           
            
        </div>
    );
};

export default Activities;