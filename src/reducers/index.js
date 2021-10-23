import { combineReducers } from "redux";
import savePosition from './savePosition';

export default combineReducers({
    position: savePosition
})