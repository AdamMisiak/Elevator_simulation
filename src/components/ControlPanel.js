import '../styles/ControlPanel.css';

import Button from './Button'
import React from 'react';
import { useSelector } from 'react-redux';

const ControlPanel = () => {
    let queue = useSelector(state => state.elevator.queue);
    let levels = useSelector(state => state.levels.positions);
    // refactor buttons to make it generic one
    return(
        <div className="control-panel">
            <p>CONTROL PANEL</p>
            <p>LEVELS: {levels.length}</p>
            <p>
                <Button 
                    label="Add level"
                />
            </p>
            <p>
                QUEUE:         
            </p>
            <ul className="control-panel-queue">
                {queue.map((level) => (
                    <li>{level}</li>
                ))}
            </ul>
        </div>
    )   
}

export default ControlPanel;