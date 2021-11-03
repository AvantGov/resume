import React from 'react'
// TODO ! import moreinfo component

const Header = () => {

    return (
        <div className="header">
            <div className="header__imgContainer">
                <div className="imgContainer__img">
                    <div className="header__iconContainer_mobile">
                        <div className="iconContainer__img_mobile"></div>
                    </div>
                </div>
            </div>
            <div className="header__iconContainer">
                <div className="iconContainer__img"></div>
            </div>
            <div className="header__intro">
                <h1 className='intro__name'>Alex Couts</h1>
                <h2 className='intro__title'>Javascript Web Dev & Digital Media Specialist</h2>
                
                <p className='intro__bio'>Leveraging technical skills learned through adolescence, and a repertoire of advanced analytic tactics developed while earning a BBA in Marketing Communication Strategy, I have filled a variety of eCommerce specialist roles in, and after undergrad. These roles ranging from product listing coordination, to digital media creation, and product management in the fintech space. These experiences perpetuated an interest in further technical roles, catalyzing a course of post-graduate learning alongside the role of Quality Assurance Manager on the MyChart Framework & Interoperability team.</p>
                    
                <p className='intro__bio'>My formal post-graduate learning consisted of Lambda School's core ReactJS and Foundational CS curriculum. Which intensively taught frontend SPA building using ReactJS while leveraging Redux and Context API architecture design, and combined CSS (LESS) for responsive mobile web design. Additionally, the latter half of the course focused on NodeJS lite server design with Express and maintenance done with the Knex library utilizing SQLite. The program capstoned with classwork on low-level computing theory and problem solving with Python.</p>
                              
                <p className='intro__bio'>This education, combined with advanced learning of cross-server compiling and context object driven user experience control flow, have prepared me to enter development, digital media, and quality assurance roles with quality-oriented perspective and enhanced user experience at the forefront of my deliverables.</p>
                    
            </div>
        </div>
    )
};

export default Header;