import { combineReducers } from "redux";
import elevatorReducer from './elevator';
import levelsReducer from './levels';

export default combineReducers({
    elevator: elevatorReducer,
    levels: levelsReducer,
})