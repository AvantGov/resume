import React from 'react';


const Contact = () => {


    return(
        <div className='Contact'>
            <h2 className='Contact__header'>Where to Find Me:</h2>
            <div className="Contact__frame">
                <ul className="frame__unlist">
                    <li className='unlist__item'>avantgov@protonmail.com</li>
                    <li className='unlist__item'>
                        <a href='https://www.behance.net/AlexCouts' target='_blank' className='item__link'>Behance</a>
                    </li>
                    <li className='unlist__item'>
                        <a href='https://github.com/AvantGov' target='_blank' className='item__link'>Github</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Contact;