import React from 'react';
import SiteFooter from './SiteFooter';
import Contact from './Contact';

const Footer = () => {

    return(
        <div className='Footer'>
            <Contact />
            <SiteFooter />
            <iframe 
                src="https://open.spotify.com/embed/playlist/6a6WHsODpZRCD4lUwyYVdN" 
                title='AvantGov HQ Playlist'
                width="30%" 
                height="100%" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media"
                className='Footer__spotity'>
            </iframe>
        </div>
    )
};

export default Footer;