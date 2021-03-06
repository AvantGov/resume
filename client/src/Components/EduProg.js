import React from 'react';


const EduProg = () => {

    return(
        <div className='EduProg'>
           <div className='EduProg__titleFrame'>
                <h2 className='EduProg__header'>Full Stack ReactJS Core Curricullum</h2>
                <h3 className='EduProg__subheader'>2019-2021, Lambda School, CA (online)</h3>
           </div>

           <div className='EduProg__descFrame'>
               <p className='descFrame__progDesc'>Core education in use of ReactJS framework with Redux and Context API architectures, to consume dynamic dataflow and control user experience in coordination.<br /><br /> Additional coursework developing web servers using Node.js and RDBMS, including SQLite and PostgreSQL. <br /><br />Capstone curriculum in computational problem solving with Python to promote foundational computer science concepts and drive insightful decision making.</p>
               <div className='descFrame__rule'></div>
               <ul className='descFrame__unlist'>
                    <li className='unlist__item'>HTML</li>
                    <li className='unlist__item'>CSS (LESS)</li>
                    <li className='unlist__item'>Javascript</li>
                    <li className='unlist__item'>ReactJS</li>
                    <li className='unlist__item'>NodeJS</li>
                    <li className='unlist__item'>Express</li>
                    <li className='unlist__item'>SQL</li>
                    <li className='unlist__item'>KnexJS</li>
                    <li className='unlist__item'>Python</li>
               </ul>
           </div>
        </div>
    )
};

export default EduProg;