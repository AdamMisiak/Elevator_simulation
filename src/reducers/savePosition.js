import { SAVE_POSITION } from '../actions/types';

const initialState = {
    height: 0,
};

const savePositionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POSITION:
            return {
                ...state,
                height: action.payload
            }
        default:
            return state;
    }
}
export default savePositionReducer;