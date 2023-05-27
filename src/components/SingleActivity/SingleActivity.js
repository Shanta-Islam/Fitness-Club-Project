import React from 'react';
import './SingleActivity.css';
const SingleActivity = (props) => {
    const {act, addToList} = props;
    return (
        <div className='singleAct-container'>
            <img src={act.img} alt="" />
            <div className="singleAct-text">
                <h3>{act.name}</h3>
                <p className='mt-2'>{act.description}</p>
                <p className='mt-3'>For Age: {act.forAge}</p>
                <p>Time Requires: {act.time} m</p>
                <button className='mt-3' onClick={()=>addToList(act)}>Add to list</button> 
            </div>
        </div>
        
    );
};
export default SingleActivity;