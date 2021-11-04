import { ORDER_ELEVATOR } from './types';

export const orderElevator = (level, queue) => {
    return dispatch => {
        dispatch(orderElevatorSuccess(level, queue))
    }
}

export const orderElevatorSuccess = (level, queue) => {
    return {
        type: ORDER_ELEVATOR,
        payload: {
            "level": level,
            "queue": queue
        }
    }
}