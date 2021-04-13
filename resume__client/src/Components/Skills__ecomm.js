import React from 'react';
import skills from '../assets/data/skills';

const Skills__ecomm = () => {

    console.log("it's dangerous to go alone, take this with you!:", skills.skills__ecomm );

    return(
        <div className='viewmore__ecomm'>
            <div className='ecomm__skillContainer'>
                <h2 className='skillContainer__title'>{skills.skills__ecomm.HELIUM10.name}</h2>
                <p className='skillContainer__description'>{skills.skills__ecomm.HELIUM10.decription}</p>
                <a  href={skills.skills__ecomm.HELIUM10.linkURL}>
                    <h3 className="skillContianer__link">{skills.skills__ecomm.HELIUM10.linkName}</h3>
                </a>
            </div>
            <div className='ecomm__skillContainer'>
                <h2 className='skillContainer__title'>{skills.skills__ecomm.EXCEL.name}</h2>
                <p className='skillContainer__description'>{skills.skills__ecomm.EXCEL.decription}</p>
                <a  href={skills.skills__ecomm.EXCEL.linkURL}>
                    <h3 className="skillContianer__link">{skills.skills__ecomm.EXCEL.linkName}</h3>
                </a>
            </div>
        </div>
    )
};

export default Skills__ecomm;