import './styles/App.css';

// import Building from './components/Building'
import Elevator from './components/Elevator'
import { Provider } from 'react-redux';
import store from './store'

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
