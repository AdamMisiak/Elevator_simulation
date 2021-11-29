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
            if (action.payload === state.queue[0]) {
                return {
                    ...state,
                    queue: [...state.queue.slice(1, state.queue.length)]
                }
            } else {
                return {
                    ...state,
                }
            }
        default:
            return state;
    }
}
export default elevatorReducer;