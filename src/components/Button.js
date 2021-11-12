import '../styles/Button.css';

import React from 'react';
import { orderElevator } from '../actions/orderElevator';
import { useDispatch } from 'react-redux';

const Button = ({
    label,
    level,
}) => {
    const dispatch = useDispatch();

    function HandleOrderElevator(e){
        dispatch(orderElevator(level));
    }

    return(
    <button
        className="btn btn-primary"
        onClick={HandleOrderElevator}>{label}
    </button>
    );
}

export default Button;