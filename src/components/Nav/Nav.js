import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons';

import './Nav.css'


const Nav = () => {
    return (
        <div className='nav-container'>

            <h1> <FontAwesomeIcon icon={faTableTennisPaddleBall}></FontAwesomeIcon> Lets Play </h1>
        </div>
    );
};

export default Nav;