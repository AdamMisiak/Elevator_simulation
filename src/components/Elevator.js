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
    
    let position = useSelector(state => state.elevator.position);
    let queue = useSelector(state => state.elevator.queue);
    let levels = useSelector(state => state.levels.positions);

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

    useEffect(() => {
        console.log(levels[0])
        console.log(queue)
        if (queue[0] === 1 && position > levels[0].position) {
            position = position - 2
            dispatch(savePosition(position));
        }
        else if (queue[0] === 1 && position < levels[0].position) {
            position = position + 2
            dispatch(savePosition(position));
        }
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