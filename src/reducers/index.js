import { combineReducers } from "redux";
import orderElevatorReducer from './orderElevator';
import saveLevelHeightReducer from './saveLevelHeight';
import savePositionReducer from './savePosition';

export default combineReducers({
    position: savePositionReducer,
    // queue: orderElevatorReducer,
    levels: saveLevelHeightReducer,
})