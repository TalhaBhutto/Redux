import './App.css';
import store from "./redux/store"
import Cakes from "./components/cake"
import {Provider} from 'react-redux'
import HooksCakeContainer from './HooksCakeContainer';
import IceCream from './components/IceCream';
import PizzaSlice from './components/PizzaSlice';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer/>
      <Cakes/>
      <IceCream/>
      <PizzaSlice/>
    </div>
    </Provider>
  );
}

export default App;
