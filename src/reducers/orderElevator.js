import { ORDER_ELEVATOR } from '../actions/types';

const initialState = {
    level: 0,
};

const orderElevator = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_ELEVATOR:
            return action.payload
        default:
            return state;
    }
}
export default orderElevator;