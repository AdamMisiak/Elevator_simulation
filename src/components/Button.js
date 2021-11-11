import '../styles/Button.css';

import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { orderElevator } from '../actions/orderElevator';

const Button = ({
    label,
    level,
}) => {
    const dispatch = useDispatch();

    let queue = useSelector(state => state.levels.queue);
    
    function HandleOrderElevator(e){
        dispatch(orderElevator(level, queue));
    }

    return(
    <button
        className="btn btn-primary"
        onClick={HandleOrderElevator}>{label}
    </button>
    );
}

export default Button;