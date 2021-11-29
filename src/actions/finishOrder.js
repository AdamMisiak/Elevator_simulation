import { FINISH_ORDER } from './types';

export const finishOrder = (level) => {
    return {
        type: FINISH_ORDER,
        payload: level
    }
}
