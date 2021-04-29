import React from 'react';


const NotifBanner = () => {

    return(
        <div className='NotifBanner'>
            <p className='NotifBanner__message'>
                I'm not mobile responsive yet! Check me out on a desktop browser, 
            </p>
            <a href='https://github.com/AvantGov/resume' target='_blank' rel="noopener noreferrer">or view this code on GitHub</a>
        </div>
    )
};

export default NotifBanner;