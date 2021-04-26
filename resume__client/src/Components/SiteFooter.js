import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter = () => {

    return(
        <div className='SiteFooter'>
            <h1 className='SiteFooter__header'>Site Nav</h1>
            <ul className='SiteFooter__unlist'>
                <Link className='SiteFooter__Link'>
                    <li className='unlist__item'>Welcome Screen</li>
                </Link>
                
                <Link className='SiteFooter__Link'>
                    <li className='unlist__item'>VISA Employment Info.</li>
                </Link>
                
                <Link className='SiteFooter__Link'>
                    <li className='unlist__item'>Epic Employment Info.</li>
                </Link>
            </ul> 
        </div>
    )
};


export default SiteFooter;