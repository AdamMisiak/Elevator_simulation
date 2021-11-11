import { SAVE_POSITION } from './types';

export const savePosition = (position) => {
    return {
        type: SAVE_POSITION,
        payload: position
    }
}