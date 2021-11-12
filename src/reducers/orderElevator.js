import { ORDER_ELEVATOR, SAVE_LEVEL_HEIGHT } from '../actions/types';

const initialState = {
    queue: [],
    levels: [],
};

const orderElevatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_ELEVATOR:
            return {
                ...state,
                queue: [...state.queue, action.payload]
            }
        case SAVE_LEVEL_HEIGHT:
            return action.payload
        default:
            return state;
    }
}
export default orderElevatorReducer;