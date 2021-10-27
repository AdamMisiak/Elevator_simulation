import '../styles/Building.css';

import Elevator from './Elevator'
import Level from './Level'
import React from 'react';

const Building = () => {
    return(
        <div className="building">
            <Elevator/>     
            {/* <Level/>      */}
            {/* <Level/> */}
        </div>

    )   
}

export default Building;