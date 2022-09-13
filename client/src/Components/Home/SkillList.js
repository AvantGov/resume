// * DEPENDS.
import React from "react";
import { Link } from 'react-router-dom'

// * CSS 
import "../../CSS/Home/SkillList.css"

const SkillList = () => {
    const arr_skills = [
        "development",
        "design",
        "photo",
        "sound"
    ]

    return(
        <div className="SkillList">
            {
                arr_skills.map((item) => {
                    return (
                        <Link to={`/${item}`} key={item} className="SkillList__link" id={item}>{item} &#8674;</Link>
                    )
                })
            }
        </div>
    )
};

export default SkillList;