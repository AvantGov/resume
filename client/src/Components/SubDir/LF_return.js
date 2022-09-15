// * DEPENDS 
import React from "react";
import { Link } from 'react-router-dom';

// * CSS
import "../../CSS/SubDir/LF_return.css" 

const LF_return = () => {

    return(
        <Link className="LF_return" to="/">&#8672; Go Back</Link>
    )
};

export default LF_return;