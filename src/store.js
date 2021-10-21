import { applyMiddleware, createStore } from 'redux';

import rootReducer from './reducers'
import thunk from 'redux-thunk';

const initialState = {
    position: 0
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;