import { ADD_LEVEL } from './types';

export const addLevel = (level) => {
    return {
        type: ADD_LEVEL,
        payload: level
    }
}
