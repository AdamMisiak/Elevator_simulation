import '../styles/Button.css';

import React from 'react';
import { orderElevator } from '../actions/orderElevator';
import { useDispatch } from 'react-redux';

const Button = ({
    label
}) => {
    const dispatch = useDispatch();
    
    function HandleOrderElevator(e){
        console.log(e)
        console.log('ORDER ELEVATOR')
        dispatch(orderElevator(1));

    }

    return(
    <button
        className="btn btn-primary"
        onClick={HandleOrderElevator}>{label}
    </button>
    );
}

export default Button;