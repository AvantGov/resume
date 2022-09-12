import React from 'react';
import { Link } from 'react-router-dom';

const EpicComp__viewmore = () => {

    return(
        <div className='viewMore__epic'>
            <div className='viewmore__intro'>
                <h1 className='intro__header'>Quality Assurance Manager @ MyChart, Framework and Interoperability</h1>
                <h2 className='intro__subheader'>Epic Health Systems, Verona, WI – (May 2020)</h2>
                <p className='intro__desc'>QA Analyst on MyChart "Cerberus" Framework & Interoperability team. This team takes broad ownership of Account Activation and Two-Factor Authorization, Proxy Access connection, and web-service Branding Customization along side low-level supporting framework upgrades.<br/><br/> Core duties include ensuring functional excellence of dataflows between client and intermediary web servers through manual workflow testing and thorough reporting on software quality levels, while following up with RnD channels to source and resolve found issues. </p>
            </div>

            <div className='viewmore__sectionContainer'>
                <div className='sectionContainer__ownership'>
                    <h1 className='ownership__title'>Ownership</h1>
                    <div className='ownership__areaContainer'>
                        <div className='ownContainer__areaContainer'>
                            <h2 className='areaContainer__title'>QA Note Triage</h2>
                            <p className='areaContainer__desc'>Responsible for research and assignment of enhancement priority QA notes to planned development projects for team consideration.</p>
                        </div><br /><br />
                        
                        <div className='ownContainer__areaContainer'>
                            <h2 className='areaContainer__title'>Design Triage</h2>
                            <p className='areaContainer__desc'>Responsible for assignment of QA perspective project design review to functional area experts across the Cerberus team.</p>
                        </div><br /><br />
                        
                        <div className='ownContainer__areaContainer'>
                            <h2 className='areaContainer__title'>Infosec Education</h2>
                            <p className='areaContainer__desc'>Core member of internally-focused infosec education group. Owner and coordinator for QA-centric infosec education newsletter.</p>
                        </div>                    
                    </div>
                </div>

                <div className='viewmore__rule'></div>

                <div className='sectionContainer__technical'>
                    <h1 className='technical__title'>Technical Expertise</h1>
                    <div className='technical__areaContainer'>
                        <div className='techContainer__areaContainer'>
                            <h2 className='areaContainer__title'>Two Factor Authentication</h2>
                            <p className='areaContainer__desc'>Thorough knowledge of workflow configurations and functional testing of internally-delivered OTP for secondary login authentication and secure contact information, as well as failure case handling for SMTP server-downtime.</p>
                            <ul className='areaContainer__unlist'>
                                <li className='unlist__item'>- Lead tester on 2020 user-focused 2FA redesign project.</li>
                            </ul>
                        </div><br /><br />

                        <div className='techContainer__areaContainer'>
                            <h2 className='areaContainer__title'>Web Service Branding</h2>
                            <p className='areaContainer__desc'>Thorough knowledge of client-delivered branding information for CSS customization for MyChart mobile application. </p>
                            <ul className='areaContainer__unlist'>
                                <li className='unlist__item'>- Lead tester on 2020 color delivery framework upgrade project. </li>
                                <li className='unlist__item'>- Working knowledge of web-services branding configurations for server-delivered branding information.</li>
                            </ul>
                        </div><br /><br />

                        <div className='techContainer__areaContainer'>
                            <h2 className='areaContainer__title'>Framework Upgrades</h2>
                            <p className='areaContainer__desc'>Lead tester for jQuery 3.5.1 upgrade and button-alignment CSS infrastructure update; both large-scale regression testing efforts of entire application to assess functional integrity upon upgrade.</p>
                        </div><br /><br />

                        <div className='techContainer__areaContainer'>
                            <h2 className='areaContainer__title'>Proxy Access + Activation</h2>
                            <p className='areaContainer__desc'>Working knowledge of user experience control flow based on provided context objects and relevant data delivered to components based on user access permissions and/or user account access context.</p>
                            <ul className='areaContainer__unlist'>
                                <li className='unlist__item'>- Delivery of notifications, reminders, and user-experience features to centralized feed of actionable items based on user account context.</li>
                                <li className='unlist__item'>- Account activation workflows completed with tokenized activation codes generated in provider application (Hyperspace)</li>
                            </ul>
                        </div>                   
                    </div>
                </div>
            </div>

            <div className='viewmore__returnEpic'>
                    <Link className='return__Link' to="/about">
                        <div className='return__button'>
                            <h2 className='button__text'> take me back </h2>
                        </div>   
                    </Link>
            </div>
        </div>
    )
};

export default EpicComp__viewmore;

