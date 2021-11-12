import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers'
import thunk from 'redux-thunk';

const initialState = {
    elevator: {
        position: 100,
        queue: [],
    },
    levels: {
        positions: []
    },
};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;