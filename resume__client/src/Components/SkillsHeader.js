import React from 'react';

const SkillsHeader = (props) => {

    // console.log("skills header props:", props)

    return(
        <div className='skillsHeader'>
            <h1 className='skillsHeader__title'>Technical and Creative Skills</h1>
            <div className="skillsHeader__areaContainer">
                
                {/* <Link className='areaContainer__Link' to='/about/programming'> */}
                <div className='areaContainer__button' onClick={() => {props.props.prog(true)}}>
                    <h2 className='button__text'>PROGRAMMING</h2>
                </div>
                {/* </Link> */}
                
                {/* <Link className='areaContainer__Link' to='/about/media'> */}
                <div className='areaContainer__button' onClick={() => {props.props.media(true)}}>
                    <h2 className='button__text'>DIGITAL MEDIA</h2>
                </div> 
                {/* </Link>            */}
                
                {/* <Link className='areaContainer__Link' to='/about/ecomm'> */}
                <div className='areaContainer__button' onClick={() => {props.props.ecomm(true)}}>
                    <h2 className='button__text'>eCOMMERCE</h2>
                </div>
                {/* </Link> */}

            </div>
        </div>
    )
};


export default SkillsHeader;