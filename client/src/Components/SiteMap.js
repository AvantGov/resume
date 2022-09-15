// * DEPENDS.
import React from 'react';
import { Link } from 'react-router-dom';

// * CSS
import "../CSS/SiteMap.css"

const SiteMap = () => {

    return(
        <div className='SiteFooter'>
            <h1 className='SiteFooter__header'>Site Nav</h1>
            <ul className='SiteFooter__unlist'>
                <Link to="/" className='SiteFooter__Link'>
                    <li className='unlist__item'>Home</li>
                </Link>
                <Link to="/skill/development" className='SiteFooter__Link'>
                    <li className='unlist__item'>Development</li>
                </Link>
                <Link to="/skill/design" className='SiteFooter__Link'>
                    <li className='unlist__item'>Design</li>
                </Link>
                <Link to="/skill/photo" className='SiteFooter__Link'>
                    <li className='unlist__item'>Photo</li>
                </Link>
                <Link to="/skill/sound" className='SiteFooter__Link'>
                    <li className='unlist__item'>Sound</li>
                </Link>
                
            </ul> 
        </div>
    )
};


export default SiteMap;