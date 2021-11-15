import '../styles/Level.css';

import { useEffect, useRef, useState } from 'react';

import Button from './Button'
import React from 'react';
import { saveLevelHeight } from '../actions/saveLevelHeight';
import { useDispatch } from 'react-redux';

const Level = (object) => { 
    const dispatch = useDispatch();
    const ref = useRef(null)
    const [position, setPosition] = useState(0);

    useEffect(()=>{
        setPosition(ref.current.getBoundingClientRect().top)
        dispatch(saveLevelHeight({
            level: object.id,
            position: position,
        }));
    }, []);

    return(
        <div className="level-container">
            <div ref={ref} className="level">
                LEVEL: {object.id}
                <p>POSITION: {position}</p>
                <Button 
                    label="Order"
                    level={object.id}
                />
            </div>
        </div>

    )   
}

export default Level;