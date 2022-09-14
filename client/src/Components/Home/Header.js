// * DEPENDS.
import React from 'react'


// * CSS
import "../../CSS/Home/Header.css"

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
                <h2 className='intro__title'>Javascript Web Dev & System Integrator</h2>
                    <br />
                <p className='intro__bio'>Leveraging a repertoire of technical, creative, and analytic skills developed while earning a BBA in Analytical Marketing, I have filled a variety of technically-focused e-Commerce positions in the years of, and following undergrad. This immersion catalyzed a course of post-graduate learning; leading to boot camp training in full-stack javascript development for web. This program intensively taught front-end development with React.js that leverages Redux and Context API driven data-flows. The latter half of the program being dedicated to Node.js lite server design with Express, and maintenance with SQLite.</p>
                    <br />
                    <br />            
                <p className='intro__bio'>Since conclusion of this program I have grown my skill set working with the Framework & Interoperability team @ MyChart, overhauling websites for local businesses, integrating networked automation systems, and experimenting at the intersection of sound, light, and code.</p>
            </div>
        </div>
    )
};

export default Header;