import {applyMiddleware, combineReducers, createStore} from "redux";
import {AddressReducer} from "./reducers";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({address: AddressReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk));