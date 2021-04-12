import React from 'react';
import { Link } from 'react-router-dom';

const EpicComp__viewmore = () => {

    return(
        <div className='viewMore__epic'>
            i am the view more component


            <div className='viewmore__return'>
                    <Link to="/">
                        <div className='return__button'>
                            <h2 className='button__text'> take me back </h2>
                        </div>   
                    </Link>
            </div>
        </div>
    )
};

export default EpicComp__viewmore;