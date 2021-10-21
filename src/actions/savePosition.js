import { SAVE_POSITION } from './types';

export const savePosition = (position) => {
    return dispatch => {
        dispatch(savePositionSuccess(position))
    }
}

export const savePositionSuccess = position => {
    return {
        type: SAVE_POSITION,
        payload: position
    }
}