import React from 'react';
// import { Link } from 'react-router-dom';
//  TODO need to figure out how to best support showing the homepage elements while showing the different view more components 
//  probably should be it's own component on the homepage

const SkillsHeader = () => {

    return(
        <div className='skillsHeader'>
            <h1 className='skillsHeader__title'>Technical and Creative Skills</h1>
            <div className="skillsHeader__areaContainer">
                <div className='areaContainer__button'>
                    <span className='button__text'>PROGRAMMING</span>
                </div>
                <div className='areaContainer__button'>
                    <span className='button__text'>DIGITAL MEDIA</span>
                </div>            
                <div className='areaContainer__button'>
                    <span className='button__text'>eCOMMERCE</span>
                </div>
            </div>
        </div>
    )
};


export default SkillsHeader;