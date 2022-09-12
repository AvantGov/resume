// * DEPENDS
import React from 'react';

// * COMPS
import SiteMap from './SiteMap';
import Contact from './Contact';

// * CSS 
import "../CSS/Footer.css"


const Footer = () => {

    return(
        <div className='Footer'>
            <div className='Footer_container'>
                <Contact />
                <SiteMap />
            </div>
            <iframe 
                src="https://open.spotify.com/embed/playlist/6a6WHsODpZRCD4lUwyYVdN" 
                title='AvantGov HQ Playlist'
                width="100%" 
                height="300px" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media"
                className='Footer__spotify'>
            </iframe>
        </div>
    )
};

export default Footer;