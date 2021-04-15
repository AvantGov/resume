import React from 'react';
import skills from '../assets/data/skills';

const Skills__Programming = () => {

    // console.log('this is the data the programmign comp is working with:',skills.skills__programming)
    return(
        <div className='viewmore__programming'>
            {skills.skills__programming.map((item) => {
                return(
                    <div className='programming__container' key={item.name}>
                        <h2 className='container__header'>{item.name}</h2>
                        {/* implement function for rendering icons */}
                        <p className='container__desc'>{item.description}</p>
                        <a href={item.linkURL} className="container__link" target='_blank' rel="noreferrer">
                            <p className='container__linkName'>{item.linkName}</p>
                        </a>
                        {item.hasLib ? item.lib.map((item) => {
                            console.log(item)
                            return(
                                <div className='container__libContainer' key={item.name}>
                                    <h3 className='libContainer__header'>{item.name}</h3>
                                    <p className='libContainer__desc'>{item.description}</p>
                                    <a href={item.linkURL} className='libContainer__link' target='_blank' rel="noreferrer">
                                        <p className='libContainer__linkName'>{item.linkName}</p>
                                    </a>

                                </div>
                            )
                        }) : null}
                    </div>
                )
            })}
        </div>
    )
};


export default Skills__Programming;