import './App.css';
import {SearchPanel} from "./Components/SearchPanel";
import {Provider} from "react-redux";
import {store} from "./Redux";
import {ClientsTable} from "./Components/ClientsTable";
import {Box} from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Box sx={{height: '100vh', background: 'linear-gradient(to right bottom, #f53d5f, #deb6d6)'}}>
        <SearchPanel/>
        <ClientsTable/>
      </Box>
    </Provider>
  );
}

export default App;
