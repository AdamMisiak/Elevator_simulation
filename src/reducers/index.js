import { combineReducers } from "redux";
import orderElevator from './orderElevator';
import savePosition from './savePosition';

export default combineReducers({
    position: savePosition,
    order: orderElevator,
})