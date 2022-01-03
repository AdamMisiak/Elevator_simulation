/* eslint-disable */

import '../styles/Elevator.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import Button from './Button'
import Level from './Level'
import React from 'react';
import elevatorBackground from "../images/elevator.jpg";
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

    function checkElevatorPositionWithMargin(position, levels){
        if (position > levels[i].position - 0.1 && position < levels[i].position + 0.1) {
            return true
        }
        return false
    }
    
    useEffect(() => {
        for (let i = 0; i < levels.length; i++) {
            if (queue[0] === levels[i].level && position > levels[i].position) {
                setPosition(position => position - 0.5)
            }
            else if (queue[0] === levels[i].level && position < levels[i].position) {
                setPosition(position => position + 0.5)
            }
            else if (queue[0] === levels[i].level && checkElevatorPositionWithMargin) {
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
            <div ref={ref} className="elevator" style={{bottom : position+'px', backgroundImage: `url(${elevatorBackground})`}}>
                <div className="buttons-container">
                    {levelsObjects.map((object) => {
                        return <Button key={object.id} label={object.id} level={object.id} side="left" elevator={true} />
                    })}
                </div>

            </div>
        </div>

    )   
}

export default Elevator;