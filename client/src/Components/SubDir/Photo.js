// DEPENDS.
import React from "react";

// DATA
import { projects } from '../../assets/data/data_SubDir.js';

// CSS 
import "../../CSS/SubDir/Photo.css"

const Photo = () => {
    const { photo } = projects;

    return(
        <div className="Photo">
            {photo.map((item) => {
                return(
                    <a className="cardlink" target="_blank" rel="nopenner noreferrer" href={item.URL} key={item.key}>
                        <div className="card">
                            <img src={item.photo} className="card__photo" id={`photo_${item.key}`} />
                            <h2 className="card__title">{item.title}</h2>
                            <p className="card__desc">{item.desc}</p>
                            <p className="card__year">{item.year}</p>
                        </div>
                    </a>
                )
            })}
        </div>
    )
};

export default Photo;