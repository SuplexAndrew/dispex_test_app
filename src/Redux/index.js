import {applyMiddleware, combineReducers, createStore} from "redux";
import {AddressReducer, ClientReducer} from "./reducers";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({address: AddressReducer, client: ClientReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk));