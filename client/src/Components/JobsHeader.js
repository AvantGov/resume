import React from 'react';

const JobsHeader = (props) => {

    // console.log("jobs header props:", props)

    return(
        <div className='jobsHeader'>
            <h1 className='jobsHeader__title'>Additional Experience</h1>
            <div className="jobsHeader__areaContainer">
                
                {/* <Link className='areaContainer__Link' to='/about/programming'> */}
                <div className='areaContainer__button' onClick={() => {props.props.ecommExp(true)}}>
                    <h2 className='button__text'>eCOMMERCE</h2>
                </div>
                {/* </Link> */}
                
                {/* <Link className='areaContainer__Link' to='/about/media'> */}
                <div className='areaContainer__button' onClick={() => {props.props.entertain(true)}}>
                    <h2 className='button__text'>ENTERTAINMENT</h2>
                </div> 
                {/* </Link>            */}
            </div>
        </div>
    )
};


export default JobsHeader;