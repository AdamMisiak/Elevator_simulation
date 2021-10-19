import './styles/App.css';

import { applyMiddleware, createStore } from 'redux';
import { useEffect, useRef, useState } from 'react';

import Elevator from './components/Elevator'
import { Provider } from 'react-redux';

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Elevator/>     
      </div>
    </Provider>
  );
}

export default App;
