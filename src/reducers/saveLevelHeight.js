import { SAVE_LEVEL_HEIGHT } from '../actions/types';

const initialState = {
    levels: [],
};

const saveLevelHeightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LEVEL_HEIGHT:
            return action.payload
        default:
            return state;
    }
}
export default saveLevelHeightReducer;