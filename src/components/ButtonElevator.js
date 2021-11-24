import '../styles/Button.css';

import React from 'react';
import { orderElevator } from '../actions/orderElevator';
import { useDispatch } from 'react-redux';

const ButtonElevator = ({
    label,
    level,
    side="right",
}) => {
    const dispatch = useDispatch();

    function HandleOrderElevator(e){
        dispatch(orderElevator(level));
    }

    return(
    <button
        className={'btn btn-primary btn-elevator ' + side}
        onClick={HandleOrderElevator}>{label}
    </button>
    );
}

export default ButtonElevator;