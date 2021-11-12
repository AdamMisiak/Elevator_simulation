import { ORDER_ELEVATOR, SAVE_POSITION } from '../actions/types';

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
        default:
            return state;
    }
}
export default elevatorReducer;