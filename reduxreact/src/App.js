import './App.css';
import store from "./redux/store"
import Cakes from "./components/cake"
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Cakes></Cakes>
    </div>
    </Provider>
  );
}

export default App;
