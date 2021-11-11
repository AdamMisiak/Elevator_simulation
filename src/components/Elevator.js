import '../styles/Elevator.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import Level from './Level'
import React from 'react';
import { savePosition } from '../actions/savePosition';

const Elevator = () => {
    const dispatch = useDispatch();
    const ref = useRef(null)
    const levelsObjects = [
        {
            "id": 1,
        },
        {
            "id": 2,
        },
        {
            "id": 3,
        },
    ]
    
    let position = useSelector(state => state.position.position);
    console.log(position)

    function handleKeyPress(e){
        if (e.key === 'ArrowUp' && position > 2) {
            position = position - 2;
            dispatch(savePosition(position));
        }
        else if (e.key === 'ArrowDown') {
            position = position + 2;
            dispatch(savePosition(position));
        }
        else {
            dispatch(savePosition(position));
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);
    });

    useEffect(()=>{
        // moving elevator will be here - if order is level 1 and position > level 1 => move down
        // if (position > 0) {
        //     position = position - 2
        //     dispatch(savePosition(position));
        // }
        // else if (position < 1000) {
        //     position = position + 2
        //     dispatch(savePosition(position));
        // }
    });
    
    return(
        <div className="elevator-container">
            <div ref={ref} className="elevator" style={{top : position+'px'}}>
                ELEVATOR
                <p>REDUX {position}</p>
            </div>
            <div className="levels">
                {levelsObjects.slice(0).reverse().map((object) => {
                    return <Level key={object.id} {...object} />
                })}
            </div>
        </div>

    )   
}

export default Elevator;