import '../styles/Elevator.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import React from 'react';
import { savePosition } from '../actions/savePosition';

const Elevator = () => {
    const dispatch = useDispatch();
    const ref = useRef(null)

    let position = useSelector(state => state.position);

    function handleKeyPress(e){
        if (e.key === 'ArrowUp') {
            position = position - 2;
            dispatch(savePosition(position));
        }
        if (e.key === 'ArrowDown') {
            position = position + 2;
            dispatch(savePosition(position));
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);
    }, []);
    
    return(
        <div className="elevator-container">
            <div ref={ref} className="elevator" style={{top : position.position+'px'}}>
                ELEVATOR
                <p>REDUX {position.position}</p>
            </div>
        </div>

    )   
}

export default Elevator;