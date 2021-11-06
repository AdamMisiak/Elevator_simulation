import { SAVE_LEVEL_HEIGHT } from './types';

export const saveLevelHeight = (level) => {
    return dispatch => {
        dispatch(saveLevelHeightSuccess(level))
    }
}

export const saveLevelHeightSuccess = level => {
    return {
        type: SAVE_LEVEL_HEIGHT,
        payload: level
    }
}