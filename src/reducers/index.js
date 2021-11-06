import { combineReducers } from "redux";
import orderElevatorReducer from './orderElevator';
import savePositionReducer from './savePosition';

export default combineReducers({
    position: savePositionReducer,
    // queue: orderElevatorReducer,
})