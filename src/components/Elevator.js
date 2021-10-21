import '../styles/Elevator.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import React from 'react';
import { savePosition } from '../actions/savePosition';

const Elevator = () => {
    const [y, setY] = useState(100);
    const ref = useRef(null)
    
    const dispatch = useDispatch();

    function handleKeyPress(e){
        if (e.key === 'ArrowUp') {
            setY(y => y - 2);
            dispatch(savePosition(y));
        }
        if (e.key === 'ArrowDown') {
            setY(y => y + 2);
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);
      }, [])
    
    return(
        <div className="elevator-container">
            <div ref={ref} className="elevator" style={{top : y+'px'}}>
                ELEVATOR
                <p>{y}</p>
            </div>
        </div>

    )   
}

export default Elevator;