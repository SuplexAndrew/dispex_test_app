import {store} from "./Redux";
import {Provider} from "react-redux";
import {Main} from "./Components/Main";

export const App = () =>
  <Provider store={store}>
    <Main/>
  </Provider>
