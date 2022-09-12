import React from 'react';
import EduMrkt from './EduMrkt';
import EduProg from '../EduProg';

const Education = () => {

    return(
        <div className="Education">
            <h1 className="Education__header">Education</h1>
            <div className='Education__contentFrame'>
                <EduMrkt />
                <div className='Education__rule'></div>
                <EduProg />
            </div>
        </div>
    )
};

export default Education;