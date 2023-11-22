import './App.css';
import Router from './config/Router.jsx';
import { store } from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Router />
        </Provider>
      </header>
    </div>
  );
}

export default App;
