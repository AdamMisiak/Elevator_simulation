import { SAVE_LEVEL_HEIGHT } from '../actions/types';

const initialState = {
    positions: [],
};

const levelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LEVEL_HEIGHT:
            return {
                ...state,
                positions: [...state.positions, action.payload]
            }
        default:
            return state;
    }
}
export default levelsReducer;