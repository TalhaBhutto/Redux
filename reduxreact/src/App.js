import './App.css';
import store from "./redux/store"
import Cakes from "./components/cake"
import {Provider} from 'react-redux'
import HooksCakeContainer from './HooksCakeContainer';
import IceCream from './components/IceCream';
import PizzaSlice from './components/PizzaSlice';
import NewCake from './components/NewCake'
import ItemContainer from './components/ItemContainer';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserComponent/>
      {/* <ItemContainer cake/>
      <ItemContainer/>
      <HooksCakeContainer/>
      <Cakes/>
      <NewCake/>
      <IceCream/>
      <PizzaSlice/> */}
    </div>
    </Provider>
  );
}

export default App;
