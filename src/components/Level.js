import '../styles/Level.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import Button from './Button'
import React from 'react';
import { saveLevelHeight } from '../actions/saveLevelHeight';

const Level = (object) => { 
    const dispatch = useDispatch();
    const ref = useRef(null)
    // const [position, setPosition] = useState(0);

    if (ref.current !== null) {
        // setPosition(ref.current.getBoundingClientRect().top)
        // console.log(ref.current.getBoundingClientRect().top)
    }

    // useEffect(()=>{
    //     dispatch(saveLevelHeight({
    //         level: object.id,
    //         position: 100,
    //     }));
    // });

    return(
        <div className="level-container">
            <div ref={ref} className="level">
                LEVEL: {object.id}
                {/* <p>POSITION: {position}</p> */}
                <Button 
                    label="Order"
                    level={object.id}
                />
            </div>
        </div>

    )   
}

export default Level;