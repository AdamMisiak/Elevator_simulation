import { SAVE_POSITION } from '../actions/types';

const initialState = {
    position: 100,
    data: {}
};

const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POSITION:
            return {
                ...state,
                position: action.payload.position,
            };
        default:
            return state;
    }
}
export default positionReducer;