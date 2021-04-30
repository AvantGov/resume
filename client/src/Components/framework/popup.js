import React from 'react';

const Popup = (props) => {

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup__inner'>
                <button className='inner__closeBtn' onClick={() => {props.setTrigger(false)}}>close</button>
                {props.children}
            </div>
        </div>
    ) : '';
};

export default Popup;