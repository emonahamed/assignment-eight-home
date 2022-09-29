import React from 'react';
import Singlesport from '../Singlesport/Singlesport';
import './Sports.css'

const Sports = ({ sports, handleAddToCart }) => {

    // console.log(sports);


    return (
        <div>
            <div className="card-container">
                {sports.map(data => <Singlesport handleAddToCart={handleAddToCart} sport={data} key={data._id} ></Singlesport>)}
            </div>

        </div>
    );
};

export default Sports;