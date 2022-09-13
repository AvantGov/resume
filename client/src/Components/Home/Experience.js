// DEPENDS.
import React from 'react';

// COMPS.
import Education from './Education';
import WorkList from './WorkList';

// CSS
import "../../CSS/Home/Experience.css"

const Experience = () => {

    return (
        <div className='Experience'>
            <Education />
            <WorkList />
        </div>
    )
};

export default Experience;