import React, { useEffect, useState } from 'react';
import Sports from '../Sports/Sports';
import './Home.css'

const Home = () => {

    const [sports, setsports] = useState([]);


    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setsports(data))

    }, [])

















    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <h1>All Players</h1>
                    <div className="sports-container">
                        <Sports></Sports>
                    </div>


                </div>
                <div className="right-side">
                    <h1>cart</h1>
                </div>

            </div>
        </div>
    );
};

export default Home;