import { ORDER_ELEVATOR } from './types';

export const orderElevator = (level) => {
    return {
        type: ORDER_ELEVATOR,
        payload: level
    }
}

// export const orderElevator = (level, queue) => {
//     return {
//         type: ORDER_ELEVATOR,
//         payload: level
//     }
// }