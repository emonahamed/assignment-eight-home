import React from 'react';
import Singlesport from '../Singlesport/Singlesport';
import './Sports.css'

const Sports = ({ sports }) => {

    // console.log(sports);


    return (
        <div>
            <div className="card-container">
                {sports.map(data => <Singlesport sport={data} key={data._id} ></Singlesport>)}
            </div>

        </div>
    );
};

export default Sports;