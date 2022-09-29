import React, { useEffect, useState } from 'react';
import Sports from '../Sports/Sports';
import './Home.css'

const Home = () => {

    const [sports, setsports] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setsports(data))

    }, [])


    const handleAddToCart = (sport) => {
        console.log(sport);
        const newCart = [...cart, sport];
        setCart(newCart)
    }

    // console.log(cart)
    let total = 0;
    for (const product of cart) {
        total = total + product.timeNeeded;


    }


    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <h3>Todays Game plan</h3>
                    <div className="sports-container">
                        <Sports handleAddToCart={handleAddToCart} sports={sports}></Sports>
                    </div>


                </div>
                <div className="right-side">
                    <div className="cart">
                        <h2>Informations</h2>
                        <p>Name:Emon Ahamed</p>
                        <p>Age:25</p>
                        <p>Height:5.7 inch</p>
                        <p>Weight: 55 Kg</p>

                        <h4>Add a Break</h4>
                        <div className="break-container">
                            <button className='break-btn'>10m</button>
                            <button className='break-btn'>20m</button>
                            <button className='break-btn'>30m</button>
                            <button className='break-btn'>40m</button>
                            <button className='break-btn'>50m</button>
                        </div>

                        <h4>Excersize details</h4>
                        <div className='excersize-details'>
                            <p>Excersize Time:{total} min </p>
                        </div>
                        <div className='excersize-details'>
                            <p>Break Time: </p>
                        </div>

                        <button className='btn-activitycompleted'>Activity Completed</button>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;