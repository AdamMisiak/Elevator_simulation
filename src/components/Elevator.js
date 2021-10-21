import '../styles/Elevator.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import React from 'react';
import { savePosition } from '../actions/savePosition';

const Elevator = () => {
    const [y, setY] = useState(100);
    const ref = useRef(null)

    let position = useSelector(state => state.position.position);
    console.log(position)
    const dispatch = useDispatch();

    function handleKeyPress(e){
        if (e.key === 'ArrowUp') {
            setY(y => y - 2);
            position = position + 2;
            dispatch(savePosition(position));
        }
        if (e.key === 'ArrowDown') {
            setY(y => y + 2);
            position = position - 2;
            dispatch(savePosition(position));
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);
      }, [])
    
    return(
        <div className="elevator-container">
            <div ref={ref} className="elevator" style={{top : y+'px'}}>
                ELEVATOR
                <p>HOOKS {y}</p>
                <p>REDUX {position}</p>
            </div>
        </div>

    )   
}

export default Elevator;