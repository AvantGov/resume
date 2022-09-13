// DEPENDS.
import React from 'react';

// CSS
import "../../CSS/Home/Education.css"

const Education = () => {

    return (
        <div className='Edu'>
            <h1 className='Edu__header'>Education</h1>
            {/* programming cert */}
            <div className='EduProg'>
               <div className='EduProg__titleFrame'>
                    <h2 className='EduProg__header'>Full Stack Web Development</h2>
                    <h3 className='EduProg__subheader'>2019-2021 | Lambda School</h3>
               </div>

               <div className='EduProg__descFrame'>
                   <p className='descFrame__progDesc'>
                        Core education in use of ReactJS framework with Redux and Context API architectures, to consume dynamic dataflow and control user experience in coordination.<br /><br />
                        Additional coursework developing web servers using Node.js and RDBMS, including SQLite and PostgreSQL. <br /><br />
                        Capstone curriculum in computational problem solving and scripting with Python to promote foundational computer science concepts and drive insightful decision making.<br /><br />
                    </p>
               </div>
            </div>
            
            {/* additional certs */}
            <div className='EduCert'>
                <div className='EduCert__certContainer' id="araknis">
                    <h2 className='certContainer__title'>Araknis Networking 300</h2>
                    <p className='certContainer__desc'>Credited online education concerning construction, maintenance, and scaling of local-area network infrastructure. Taught highly transferrable skills utilizing Araknis equipment for instructional purposes.</p>
                </div>
                <div className='EduCert__certContainer' id="control4">
                    <h2 className='certContainer__title'>Control 4 Associate Installer</h2>
                    <p className='certContainer__desc'>Foundational training for installation and configuration of Control 4 automation systems.</p>
                </div>
            </div>

            {/* marketing degree */}
            <div className='EduMrkt'>
                <div className='EduMrkt__headerFrame'>
                    <h2 className='EduMrkt__header'>BBA Marketing Communication Strategy</h2>
                    <h3 className='EduMrkt__subheader'>2015-2018 | Kent State University</h3>
                </div>

                <div className='EduMrkt__contentFrame'>
                    <div className='EduMrkt__descFrame'>
                        <p className='descFrame__desc'>
                            The Bachelor of Business Administration degree in Marketing Communication Strategy prepares students to be marketing practitioners by helping them to fully develop the analytical, decision-making and communications (written and oral) skills used and valued by individuals working in this field.<br /><br />    
                            Faculty engage each student in active learning through hands-on assignments, case studies, projects with real businesses, and dynamic interactions with faculty members and other students in the classroom.<br /><br />
                            The objective of this program is to educate students to function effectively in business environments where they will have to make autonomous decisions and be required to take action on their own initiative.
                        </p>
                    </div>

                <div className='EduMrkt__minorFrame'>
                    <h3 className="minorFrame__title">Minors</h3>
                    <p className='minorFrame__minor'>Visual Communication Design</p>
                    <p className='minorFrame__minorDesc'>This programs develop technical proficiency and design expertise by organization of imagery and typography for commercial and illustrative application to communicate information in both two- and three-dimensional form.</p>
                    <p className='minorFrame__minor'>Photo-Illustration</p>
                    <p className='minorFrame__minorDesc'>Prepares students to become emerging professional photographers in a range of careers including Advertising, Fashion, Architectural, Food, Editorial Photography, Commercial Photography, Portraiture, Photo and Art Direction, Digital Technical, and Fine Art Photography.</p>
                </div>

                    {/* <div className='EduMrkt__courseFrame'>
                        <p className='courseFrame__title'>Relevant Coursework</p>
                        <ul className='courseFrame__unlist'>
                            <li className='unlist__item'>Consumer Analysis</li>
                            <li className='unlist__item'>Intg. Marketing Strategy</li>
                            <li className='unlist__item'>Marketing Data Analysis</li>
                            <li className='unlist__item'>Intg. Marketing Communications</li>
                            <li className='unlist__item'>Marketing Decision Making</li>
                        </ul>
                    </div> */}
            </div>



            </div>
        </div>
    )
};

export default Education;