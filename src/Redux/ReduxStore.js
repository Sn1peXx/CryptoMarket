import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';

import CoinListReducer from "./CoinListReducer";
import AppReducer from "./AppReducer";
import LoginReducer from "./LoginReducer";

let reducers = combineReducers({
    CoinListPage: CoinListReducer,
    AppPage: AppReducer,
    LoginPage: LoginReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;