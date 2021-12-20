import '../styles/ControlPanel.css';

import React from 'react';
import { useSelector } from 'react-redux';

const ControlPanel = () => {
    let queue = useSelector(state => state.elevator.queue);
    let levels = useSelector(state => state.levels.positions);
    return(
        <div className="control-panel">
            <p>CONTROL PANEL</p>
            <p>LEVELS: {levels.length}</p>
            QUEUE: 
            <ul className="control-panel-queue">
                {queue.map((level) => (
                    <li>{level}</li>
                ))}
            </ul>
        </div>
    )   
}

export default ControlPanel;