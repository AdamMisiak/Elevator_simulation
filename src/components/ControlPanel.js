import '../styles/ControlPanel.css';

import React from 'react';
import { useSelector } from 'react-redux';

const ControlPanel = () => {
    let queue = useSelector(state => state.elevator.queue);
    return(
        <div className="control-panel">
            <p>CONTROL PANEL</p>
            QUEUE: 
            <ul>
                {queue.map((level) => (
                    <li>{level}</li>
                ))}
            </ul>
        </div>
    )   
}

export default ControlPanel;