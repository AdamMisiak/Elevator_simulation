import '../styles/Level.css';

import Button from './Button'
import React from 'react';

const Level = (object) => { 
    return(
        <div className="level-container">
            <div className="level">
                LEVEL: {object.id}
                <Button 
                    label="Order"
                    level={object.id}
                />
            </div>
        </div>

    )   
}

export default Level;