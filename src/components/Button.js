import '../styles/Button.css';

import React from 'react';
import { orderElevator } from '../actions/orderElevator';
import { useDispatch } from 'react-redux';

const Button = ({
    label,
    level,
    side,
    elevator,
    absolute,
    queue,
}) => {
    const dispatch = useDispatch();

    function HandleOrderElevator(e){
        dispatch(orderElevator(level));
    }

    function HandleAddLevel(e){
        console.log('TEST')
    }

    return(
    <button
        className={'btn btn-primary ' + (elevator===true ? 'btn-elevator ' : '') + (absolute===true ? 'btn-absolute ' : '') + (side ? side : "")}
        onClick={(queue===true ? HandleAddLevel : HandleOrderElevator)}
    >
            {label}
    </button>
    );
}

export default Button;