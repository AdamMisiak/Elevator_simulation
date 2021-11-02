import { ORDER_ELEVATOR } from './types';

export const orderElevator = (level) => {
    return dispatch => {
        dispatch(orderElevatorSuccess(level))
    }
}

export const orderElevatorSuccess = level => {
    return {
        type: ORDER_ELEVATOR,
        payload: level
    }
}