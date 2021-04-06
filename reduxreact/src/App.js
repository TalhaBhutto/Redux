import './App.css';
import store from "./redux/store"
import Cakes from "./components/cake"
import {Provider} from 'react-redux'
import HooksCakeContainer from './HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer></HooksCakeContainer>
      <Cakes></Cakes>
    </div>
    </Provider>
  );
}

export default App;
