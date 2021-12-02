import './styles/App.css';

import Building from './components/Building'
import ControlPanel from './components/ControlPanel'
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Building/>
        <ControlPanel/> 
      </div>
    </Provider>
  );
}

export default App;
