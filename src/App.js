import './App.css';
import {SearchPanel} from "./Components/SearchPanel";
import {Provider} from "react-redux";
import {store} from "./Redux";

function App() {
  return (
    <Provider store={store}>
      <SearchPanel/>
    </Provider>
  );
}

export default App;
