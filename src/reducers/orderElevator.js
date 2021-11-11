import { ORDER_ELEVATOR } from '../actions/types';

const initialState = {
    queue: [],
};

const orderElevatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_ELEVATOR:
            return {
                ...state,
                queue: [...state.queue, action.payload]
            }
        default:
            return state;
    }
}
export default orderElevatorReducer;