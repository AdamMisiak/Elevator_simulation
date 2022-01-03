/* eslint-disable */

import '../styles/Level.css';

import { useEffect, useRef, useState } from 'react';

import Button from './Button'
import React from 'react';
import { saveLevelHeight } from '../actions/saveLevelHeight';
import { useDispatch } from 'react-redux';

const Level = (object) => { 
    const levelMargin = 2
    const dispatch = useDispatch();
    const ref = useRef(null)
    const [position, setPosition] = useState(0);

    useEffect(()=>{
        let tempPosition = ref.current.offsetParent.getBoundingClientRect().bottom - ref.current.getBoundingClientRect().bottom + levelMargin
        setPosition(Math.floor(tempPosition))
        dispatch(saveLevelHeight({
            level: object.id,
            position: tempPosition,
        }));
    }, []);

    return(
        <div className="level-container">
            <div ref={ref} className="level">
                <div className="level-control-panel">
                    LEVEL: <b>{object.id}</b>
                    <p>POSITION: <b>{position}</b></p>
                    <Button 
                        label="Order"
                        level={object.id}
                    />
                </div>
            </div>
        </div>

    )   
}

export default Level;