/* eslint-disable */

import '../styles/Elevator.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import ButtonElevator from './ButtonElevator'
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
        {
            "id": 3,
        },
        {
            "id": 4,
        },
    ]
    const positionState = useSelector(state => state.elevator.position);
    let queue = useSelector(state => state.elevator.queue);
    let levels = useSelector(state => state.levels.positions);

    const [position, setPosition] = useState(positionState);

    function handleKeyPress(e){
        if (e.key === 'ArrowUp' && position > 2) {
            setPosition(position => position + 2)
        }
        else if (e.key === 'ArrowDown') {
            setPosition(position => position - 2)
        }
    }
    
    useEffect(() => {
        for (let i = 0; i < levels.length; i++) {
            if (queue[0] === levels[i].level && position > levels[i].position) {
                setPosition(position => position - 0.5)
            }
            else if (queue[0] === levels[i].level && position < levels[i].position) {
                setPosition(position => position + 0.5)
            }
            else if (queue[0] === levels[i].level && position === levels[i].position) {
                setTimeout(() => {
                    dispatch(finishOrder(queue[0]));
                }, 2000)
            }
        }
    }, [levels, queue, position, dispatch]);

    useEffect(() => {
        dispatch(savePosition(position));
    }, [position]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
    }, []);

    return(
        <div className="elevator-container">
            <div ref={ref} className="elevator" style={{bottom : position+'px'}}>
                ELEVATOR
                <p>REDUX {position}</p>
                <div className="buttons-container">
                    {levelsObjects.map((object) => {
                        return <ButtonElevator key={object.id} label={object.id} level={object.id} side="left" />
                    })}
                </div>

            </div>
            {/* <div className="levels">
                {levelsObjects.map((object) => {
                    return <Level key={object.id} {...object} />
                })}
            </div> */}
        </div>

    )   
}

export default Elevator;