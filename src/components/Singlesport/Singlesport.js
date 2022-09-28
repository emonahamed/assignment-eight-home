import React from 'react';
import './Singlesport.css'

const Singlesport = ({ sport }) => {
    console.log(sport);
    const { picture, timeNeeded, name } = sport;

    return (
        <div className='card'>
            <img className='sport-image' src={picture} alt="" srcset="" />
            <h6>Title:{name}</h6>
            <p>Time needed: {timeNeeded}min</p>
            <button className='card-btn'>Add To List</button>
        </div>
    );
};

export default Singlesport;