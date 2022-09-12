import React from "react";
import skills from "../../assets/data/skills";

const Skills__Ecomm = () => {
//   console.log("it's dangerous to go alone, take this with you!:", skills.skills__ecomm);
  return (
    <div className="viewmore__ecomm">
        {skills.skills__ecomm.map((item) => {
            return(
                <div className='ecomm__container' key={item.name}>
                    <h2 className='container__header'>{item.name}</h2>
                    <p className='container__desc'>{item.description}</p>
                    <p className='container__link'><a href={item.linkURL} target='_blank' rel="noreferrer">{item.linkName}</a></p>
                </div>
            )

        })}
    </div>
  );
};

export default Skills__Ecomm;
