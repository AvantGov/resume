import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {

    return(
        <div className='welcome'>
            <h1 className='welcome__title'>thank you for visiting</h1>

            <Link className="welcome__Link" to='/about'>
                <div className='welcome__entryButton'>
                    <h2 className='entryButton__text'>Step Inside</h2>
                </div>
            </Link>

            {/* code "youre the Nth person here" counter from value stored in database */}
        </div>
    )
};

export default Welcome;