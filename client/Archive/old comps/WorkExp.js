import React from 'react';
import EpicComp from './WorkExp__epicComp';
import VisaComp from './WorkExp__visaComp';

const WorkExp = () => {

    return(
        <div className="WorkExp">
            <h1 className="WorkExp__header">Work Experience</h1>
            <div className='WorkExp__mainItems'>
                <EpicComp />
                <VisaComp />
            </div>
        </div>
    )
};

export default WorkExp;