import '../styles/ControlPanel.css';

import Button from './Button'
import React from 'react';
import { useSelector } from 'react-redux';

const ControlPanel = () => {
    let queue = useSelector(state => state.elevator.queue);
    let levels = useSelector(state => state.levels.positions);
    return(
        <div className="control-panel">
            <p><b>CONTROL PANEL</b></p>
            <p>LEVELS: <b>{levels.length}</b></p>
            <div>
                <p>
                <Button 
                    label="Add"
                />
                <Button 
                    label="Delete"
                />
                </p>
            </div>
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