import '../styles/Building.css';

import Elevator from './Elevator'
import Level from './Level'
import React from 'react';

const Building = () => {
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
    return(
        <div className="building">
            <Elevator/>
            {/* add levels to redux + dynamically change */}
            <div className="levels">
                {levelsObjects.map((object) => {
                    return <Level key={object.id} {...object} />
                })}
            </div> 
        </div>
    )   
}

export default Building;