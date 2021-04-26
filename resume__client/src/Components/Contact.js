import React from 'react';


const Contact = () => {


    return(
        <div className='Contact'>
            <h2 className='Contact__header'>Where to Find Me:</h2>
            <div className="Contact__frame">
                <ul className="frame__unlist">
                    <li className='unlist__item'>avantgov@protonmail.com</li>
                    <li className='unlist__item'>
                        <a href='https://www.behance.net/AlexCouts' target='_blank' rel="noreferrer" className='item__link'>Behance</a>
                    </li>
                    <li className='unlist__item'>
                        <a href='https://github.com/AvantGov' target='_blank' rel="noreferrer" className='item__link'>Github</a>
                    </li>
                    <li className='unlist__item'>
                        <a href='https://www.linkedin.com/in/alex-c-329721109/' target='_blank' rel="noreferrer" className='item__link'>LinkedIn</a>
                    </li>
                    <li className='unlist__item'>
                        <a href='https://open.spotify.com/playlist/6a6WHsODpZRCD4lUwyYVdN?si=QZOoZ-MYQYOc7T-8ch-4Kw' target='_blank' rel="noreferrer" className='item__link'>Spotify Playlist</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Contact;