import '../styles/Level.css';

import { useRef, useState } from 'react';

import Button from './Button'
import React from 'react';

const Level = (object) => { 
    const ref = useRef(null)
    const [position, setPosition] = useState(0);

    if (ref.current !== null) {
        // setPosition(ref.current.getBoundingClientRect().top)
        // console.log(ref.current.getBoundingClientRect().top)
    }

    return(
        <div className="level-container">
            <div ref={ref} className="level">
                LEVEL: {object.id}
                <p>POSITION: {position}</p>
                <Button 
                    label="Order"
                    level={object.id}
                />
            </div>
        </div>

    )   
}

export default Level;