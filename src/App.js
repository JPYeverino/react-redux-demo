import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HookCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import HookIcecreamContainer from './components/HookIcecreamContainer';
import HooksCakesContainer from './components/newCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       
      </div>
    </Provider>
  );
}

export default App;
