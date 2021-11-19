import '../styles/Elevator.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import Level from './Level'
import React from 'react';
import { finishOrder } from '../actions/finishOrder';
import { savePosition } from '../actions/savePosition';

const Elevator = () => {
    const dispatch = useDispatch();
    const ref = useRef(null)
    const levelsObjects = [
        {
            "id": 0,
        },
        {
            "id": 1,
        },
        {
            "id": 2,
        },
    ]
    const margin = 1;
    
    let position = useSelector(state => state.elevator.position);
    let queue = useSelector(state => state.elevator.queue);
    let levels = useSelector(state => state.levels.positions);

    function handleKeyPress(e){
    if (e.key === 'ArrowUp' && position > 2) {
            position = position + 2
            dispatch(savePosition(position));
        }
        else if (e.key === 'ArrowDown') {
            position = position - 2
            dispatch(savePosition(position));
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);
    }, [document]);

    useEffect(() => {
        // tutaj chyba kolejnosc jest zla - levles[0] to chyba najwyzszy poziom??
        // for (let i = 0; i < levels.length; i++) {
        //     console.log(i, queue[0], levels[i].level)
            // if (queue[0] === levels[i].level && position >= levels[2].position + margin) {
            //     position = position - 1;
            //     dispatch(savePosition(position));
            // }
            // else if (queue[0] === 1 && position <= levels[2].position - margin) {
            //     position = position + 1;
            //     dispatch(savePosition(position));
            // }
            // else if (queue[0] === 1 && position === levels[2].position) {
            //     dispatch(finishOrder());
            // }
        // }
        if (queue[0] === 0 && position >= levels[0].position + margin) {
            position = position - 1;
            dispatch(savePosition(position));
        }
        else if (queue[0] === 0 && position <= levels[0].position - margin) {
            position = position + 1;
            dispatch(savePosition(position));
        }
        else if (queue[0] === 0 && position === levels[0].position) {
            dispatch(finishOrder());
            // dispatch(savePosition(position));
        }
        // if (queue[0] === 1 && position >= levels[2].position + margin) {
        //     position = position - 1;
        //     dispatch(savePosition(position));
        // }
        // else if (queue[0] === 1 && position <= levels[2].position - margin) {
        //     position = position + 1;
        //     dispatch(savePosition(position));
        // }
        // else if (queue[0] === 1 && position === levels[2].position) {
        //     dispatch(finishOrder());
        // }

    });
    
    return(
        <div className="elevator-container">
            <div ref={ref} className="elevator" style={{bottom : position+'px'}}>
                ELEVATOR
                <p>REDUX {position}</p>
            </div>
            <div className="levels">
                {levelsObjects.map((object) => {
                    return <Level key={object.id} {...object} />
                })}
            </div>
        </div>

    )   
}

export default Elevator;