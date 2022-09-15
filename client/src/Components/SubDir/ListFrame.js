// * DEPENDS.
import React from 'react';
import { Route } from 'react-router-dom';

// COMPS. (lists)
import Development from './Development.js';
import Design from './Design.js';
import Photo from './Photo.js';
import Sound from './Sound.js';

// * CSS
import "../../CSS/SubDir/ListFrame.css";


const ListFrame = () => {
    return(
        <div className="ListFrame">
            <Route path="/skill/Development">
                <h1 className='ListFrame__title'>Development</h1>
                <Development />
            </Route>

            <Route path="/skill/Design">
                <h1 className='ListFrame__title'>Design</h1>
                <Design />
            </Route>

            <Route path="/skill/Photo">
                <h1 className='ListFrame__title'>Photo</h1>
                <Photo />
            </Route>

            <Route path="/skill/Sound">
                <h1 className='ListFrame__title'>Music, etc.</h1>
                <Sound />
            </Route>
        </div>
    )
};

export default ListFrame;