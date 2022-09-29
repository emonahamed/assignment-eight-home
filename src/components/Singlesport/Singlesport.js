import React from 'react';
import './Singlesport.css'

const Singlesport = ({ sport, handleAddToCart }) => {
    // console.log(sport, handleAddToCart);
    const { picture, timeNeeded, name } = sport;



    return (
        <div className='card'>
            <img className='sport-image' src={picture} alt="" srcset="" />
            <h6>Title:{name}</h6>
            <p>Time Spent: {timeNeeded}min</p>
            <button onClick={() => handleAddToCart(sport)} className='card-btn'>Add To List</button>
        </div>
    );
};

export default Singlesport;