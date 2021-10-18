import '../styles/Elevator.css';

import { useEffect, useRef, useState } from 'react';

import React from 'react';

const Elevator = () => {
    const [y, setY] = useState(100);
    const ref = useRef(null)
    

    function handleKeyPress(e){
        if (e.key === 'ArrowUp') {
            setY(y => y - 2);
        }
        if (e.key === 'ArrowDown') {
            setY(y => y + 2);
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);
      }, [])
    
    return(
        <div className="elevator-container">
            <div ref={ref} className="elevator" style={{top : y+'px'}}>
                ELEVATOR
                <p>{y}</p>
            </div>
        </div>

    )   
}

export default Elevator;