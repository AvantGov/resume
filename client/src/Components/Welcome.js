// * DEPENDS.
import React from 'react';
import { Link } from 'react-router-dom';

// * CSS 
import "../CSS/Welcome.css"


const Welcome = () => {

    return(
        <div className='welcome'>
            <h1 className='welcome__title'>thank you for visiting</h1>

            <Link className="welcome__Link" to='/home'>
                <div className='welcome__entryButton'>
                    <h2 className='entryButton__text'>Step Inside</h2>
                </div>
            </Link>
        </div>
    )
};

export default Welcome;