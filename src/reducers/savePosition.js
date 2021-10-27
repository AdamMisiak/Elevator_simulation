import { SAVE_POSITION } from '../actions/types';

const initialState = {
    position: 0,
};

const savePosition = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POSITION:
            return action.payload
        default:
            return state;
    }
}
export default savePosition;