import { FINISH_ORDER, ORDER_ELEVATOR, SAVE_POSITION } from '../actions/types';

const initialState = {
    position: 0,
    queue: [],
};

const elevatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POSITION:
            return {
                ...state,
                position: action.payload
            }
        case ORDER_ELEVATOR:
            return {
                ...state,
                queue: [...state.queue, action.payload]
            }
        case FINISH_ORDER:
            return {
                ...state,
                queue: [...state.queue.slice(1, state.queue.length)]
            }
        default:
            return state;
    }
}
export default elevatorReducer;