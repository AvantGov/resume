import React from 'react';
import skills from '../assets/data/skills';

const counter__init = 0

const Skills__media = () => {

    console.log(skills.skills__media)
    return(
        <div className='viewmore__media'>
            {skills.skills__media.map((item) => {
                
                const newCount = counter__init + 1

                return(
                    <div className='media__container' key={item.name}>
                        <h1 className='container__header'>{item.name}</h1>
                        {/* TODO: add rating iteration function for icon rendering based on the item.rating data in the imported object */}
                        <p className='container__desc'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
};


export default Skills__media;