import '../styles/Elevator.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import Level from './Level'
import React from 'react';
import { savePosition } from '../actions/savePosition';

const Elevator = () => {
    const dispatch = useDispatch();
    const ref = useRef(null)

    let position = useSelector(state => state.position);

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
    
    return(
        <div className="elevator-container">
            <div ref={ref} className="elevator" style={{top : position+'px'}}>
                ELEVATOR
                <p>REDUX {position}</p>
            </div>
            <div className="levels">
                <Level />
                <Level />
            </div>
        </div>

    )   
}

export default Elevator;