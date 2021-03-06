import React from 'react';
import skills from '../assets/data/skills';

const Skills__Media = () => {

    // console.log(skills.skills__media)
    return(
        <div className='viewmore__media'>
            {skills.skills__media.map((item) => {
                return(
                    <div className='media__container' key={item.name}>
                        <h2 className='container__header'>{item.name}</h2>
                        {/* TODO: add rating iteration function for icon rendering based on the item.rating data in the imported object */}
                        <p className='container__desc'>{item.description}</p>
                        <p className='container__linkName'><a href={item.linkURL} className='container__link' target='_blank' rel="noreferrer">{item.linkName}</a></p>
                    </div>
                )
            })}
        </div>
    )
};


export default Skills__Media;