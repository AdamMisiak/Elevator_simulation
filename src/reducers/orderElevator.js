import { ORDER_ELEVATOR } from '../actions/types';

const initialState = {
    queue: [],
};
const orderElevatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_ELEVATOR:
            const { level, queue } = action.payload;
            return {
                ...state,
                queue: [...queue, level]
            }
        default:
            return state.queue;
    }
}
export default orderElevatorReducer;