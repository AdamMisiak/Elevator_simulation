import { combineReducers } from "redux";
import positionReducer from './positionReducer';

export default combineReducers({
    position: positionReducer
})