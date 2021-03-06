import React from 'react';
import { Link } from 'react-router-dom';

const WorkExp__visaComp = () => {

    return(
        <div className="visaComp">
            <h2 className='visaComp__header'> 💳 Global Product Management Intern</h2>
                <br />
            <p className='visaComp__desc'>After receiving immersive security product training, covering authentication and authorization SFTP for eCommerce, my role owned primarily copywriting and inter-team coordination and reporting assignments. With these tasks at the core focus of my days, I proposed and delivered an enhanced in-house tool that provided GPM team members with an operable dashboard to track and resolve customer requests reported by implementation service team members. </p>
                <br />
            <Link className='visaComp__more' to='/about/visa'>More Info</Link>
                <br />
            {/*  TODO: add router content in separate component for learn more information */}

        </div>
    )
};

export default WorkExp__visaComp