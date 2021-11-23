/* eslint-disable */

import '../styles/Level.css';

import { useEffect, useRef, useState } from 'react';

import ButtonLevel from './ButtonLevel'
import React from 'react';
import { saveLevelHeight } from '../actions/saveLevelHeight';
import { useDispatch } from 'react-redux';

const Level = (object) => { 
    const dispatch = useDispatch();
    const ref = useRef(null)
    const [position, setPosition] = useState(0);

    useEffect(()=>{
        let tempPosition = ref.current.offsetParent.getBoundingClientRect().bottom - ref.current.getBoundingClientRect().bottom
        setPosition(tempPosition)
        dispatch(saveLevelHeight({
            level: object.id,
            position: tempPosition,
        }));
    }, []);

    return(
        <div className="level-container">
            <div ref={ref} className="level">
                LEVEL: {object.id}
                <p>POSITION: {position}</p>
                <ButtonLevel 
                    label="Order"
                    level={object.id}
                    side="right"
                />
            </div>
        </div>

    )   
}

export default Level;