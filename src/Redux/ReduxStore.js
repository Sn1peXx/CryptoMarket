import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';

import CoinListReducer from "./CoinListReducer";

let reducers = combineReducers({
    CoinListPage: CoinListReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;