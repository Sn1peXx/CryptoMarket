import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';

import CoinListReducer from "./CoinListReducer";
import AppReducer from "./AppReducer";
import LoginReducer from "./LoginReducer";
import TradeReducer from "./TradeReducer";

let reducers = combineReducers({
    CoinListPage: CoinListReducer,
    AppPage: AppReducer,
    TradePage: TradeReducer,
    LoginPage: LoginReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;