import React from 'react'
import { Link } from 'react-router-dom';

const WorkExp__epicComp = () => {

    return(
        <div className="epicComp">
            <h2 className='epicComp__header'>🚦Quality Assurance Manager @ MyChart, Framework and Interoperability</h2>
                <br />
            <p className='epicComp__desc'>QA Manager on MyChart "Cerberus" Framework & Interoperability team. This team takes broad ownership of Account Activation and Two-Factor Authorization, Proxy Access connection, and web-service Branding Customization along side low-level supporting framework upgrades.</p> 
                <br />
            <p className=''>Core duties include ensuring functional excellence of dataflows between client and intermediary web servers through manual workflow testing and thorough reporting on software quality levels, while following up with RnD channels to source and resolve found issues. </p>
                <br />
            <Link className='epicComp__more' to='/about/epic'>More Info</Link>
        </div>
    )
};

export default WorkExp__epicComp;
