import React from 'react';
import { Link } from 'react-router-dom';

const EpicComp__viewmore = () => {

    return(
        <div className='viewMore__epic'>
            <div className='viewmore__intro'>
                <h1 className='intro__header'>Quality Assurance Manager</h1>
                <h1 className='intro__header'>@ MyChart, Framework and Interoperability</h1>
                <h2 className='intro__subheader'>Epic Health Systems, Verona, WI – (May 2020)</h2>
                <p className='intro__desc'>QA Analyst on MyChart "Cerberus" Framework & Interoperability team. This team takes broad ownership of Account Activation and Two-Factor Authorization, Proxy Access connection, and web-service Branding Customization along side low-level supporting framework upgrades. Core duties include ensuring functional excellence of dataflows between client and intermediary web servers through manual workflow testing and thorough reporting on software quality levels, while following up with RnD channels to source and resolve found issues. </p>
            </div>

            <div className='viewmore__ownership'>
                <h1 className='ownership__title'>Ownership</h1>
                <div className='ownership__container'>
                    <div className='ownContainer__areaContainer'>
                        <h2 className='areaContainer__title'>Title</h2>
                        <p className='areaContainer__desc'>i am the descriptio hear me roar</p>
                    </div>
                    
                    <div className='ownContainer__areaContainer'>
                        <h2 className='areaContainer__title'>Title</h2>
                        <p className='areaContainer__desc'>i am the descriptio hear me roar</p>
                    </div>
                    
                    <div className='ownContainer__areaContainer'>
                        <h2 className='areaContainer__title'>Title</h2>
                        <p className='areaContainer__desc'>i am the descriptio hear me roar</p>
                    </div>                    
                </div>
            </div>

            <div className='viewmore__technical'>
                i will be the technical concepts component
            </div>

            <div className='viewmore__return'>
                    <Link to="/">
                        <div className='return__button'>
                            <h2 className='button__text'> take me back </h2>
                        </div>   
                    </Link>
            </div>
        </div>
    )
};

export default EpicComp__viewmore;

