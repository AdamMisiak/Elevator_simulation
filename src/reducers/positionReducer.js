import { SAVE_POSITION } from '../actions/types';

const initialState = {
    position: 0,
};

const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POSITION:
                return {
                ...state,
                position: action.payload,
            };
        default:
            return state;
    }
}
export default positionReducer;