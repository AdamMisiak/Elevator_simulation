import './styles/App.css';

import Building from './components/Building'
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Building/>     
      </div>
    </Provider>
  );
}

export default App;
