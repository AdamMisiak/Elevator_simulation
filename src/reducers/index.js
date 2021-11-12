import { combineReducers } from "redux";
import elevatorReducer from './elevator';
import orderElevatorReducer from './orderElevator';

// import saveLevelHeightReducer from './saveLevelHeight';


export default combineReducers({
    elevator: elevatorReducer,
    // levels: saveLevelHeightReducer,
    levels: orderElevatorReducer,
})