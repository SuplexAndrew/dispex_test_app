import {applyMiddleware, combineReducers, createStore} from "redux";
import {StreetReducer} from "./reducers";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({streets: StreetReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk));