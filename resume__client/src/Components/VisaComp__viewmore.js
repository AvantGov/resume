import React from 'react';
import { Link } from 'react-router-dom'

// * image imports for src 
import one from '../assets/Cardinal/1.png';
import two from '../assets/Cardinal/2.png';
import three from '../assets/Cardinal/3.png';
import four from '../assets/Cardinal/4.png';
import five from '../assets/Cardinal/5.png';
import six from '../assets/Cardinal/6.gif';
import seven from '../assets/Cardinal/7.png';

const VisaComp__viewmore = () => {

    return(
        <div className='viewMore__visa'>
            <div className='viewMore__intro'>
                <h1 className='intro__header'>Global Product Management Intern</h1>
                <h2 className='intro__subhead'>VISA & CardinalCommerce, Cleveland, OH – (Apr 2019 - Aug 2019)</h2>
                <p className='intro__desc'>After receiving immersive security product training, covering authentication and authorization SFTP for eCommerce, my role owned primarily copywriting and inter-team coordination and reporting assignments. With these tasks at the core focus of my days, I proposed and delivered an enhanced in-house tool that provided GPM team members with an operable dashboard to track and resolve customer requests reported by implementation service team members.</p>
            </div>
                
            <div className='viewMore__details'>    
                <div className='details__descGrouper'>
                    <h2 className='intro__subhead'>Additional Details</h2>
                    <ul className="descGrouper__unlist">
                        <li className='intro__moreInfo'>- Completed Visa PCI compliance and product immersion training while simultaneously learning about authentication and authorization SFTP for eCommerce.</li>
                        <li className='intro__moreInfo'>- Created analytics dashboard and reports auditing internal communication softwares utilized by the Global Product Team and customer-facing teams to communicate market demands, client requests, feature enhancements, and other product-related inquiries.</li>
                        <li className='intro__moreInfo'>- Translated EMVCo, Visa, MasterCard, Cartes Bancaire, JCB, and other technical documentation into educational seminars provided to department heads. Topics included: PSD2 Regulation in Hotel and Travel Industires, ENVCo 2.2 Data Points.</li>
                        <li className='intro__moreInfo'>- Designed and coordinated system for platform development tracking while being immersed in agile and lean production strategy meetings.</li>
                        <li className='intro__moreInfo'>- Wrote both high-level marketing and tech-intensive sales for copy for documents and presentation materials provided to prospects and current clients by global sales team.</li>
                        <li className='intro__moreInfo'>- Designed and proposed initial concepts for product suite repositioning MARCOM materials.</li>
                    </ul>
                </div>
            </div>

            <div className='viewMore__project'>
                <h1 className='project__title'>Reporting Dashboard Internship Project</h1>
                <div className='project__imgContainer'>
                    <div className='imgContainer'>
                        <img src={one} alt='project presentation slide 1' />
                    </div>

                    <div className='imgContainer'>
                        <img src={two} alt='project presentation slide 2' />
                    </div>

                    <div className='imgContainer'>
                        <img src={three} alt='project presentation slide 3' />
                    </div>

                    <div className='imgContainer'>
                        <img src={four} alt='project presentation slide 4' />
                    </div>

                    <div className='imgContainer'>
                        <img src={five} alt='project presentation slide 5' />
                    </div>

                    <div className='imgContainer'>
                        <img src={six} alt='project presentation slide 6' />
                    </div>

                    <div className='imgContainer'>
                        <img src={seven} alt='project presentation slide 7' />
                    </div>
                </div>
            </div>
            
            <div className='viewmore__return'>
                    <Link className='return__Link' to="/about">
                        <div className='return__button'>
                            <h2> take me back </h2>
                        </div>   
                    </Link>
            </div>
        </div>
    )
};

export default VisaComp__viewmore;