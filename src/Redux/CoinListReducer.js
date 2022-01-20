import {API} from "../API/api";

const SELECT_CRYPTO = 'coinlist/SELECT_CRYPTO';
const TOGGLE_IS_FETCHING = 'coinlist/TOGGLE_IS_FETCHING';
const SET_COINS = 'coinlist/SET_COINS';

let initialState = {
    selectCrypto: 'bitcoin',
    isFetching: true,
    coins: []
}

const CoinListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CRYPTO:
            return {...state, selectCrypto: action.selectCrypto}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case SET_COINS:
            return {...state, coins: action.coins}

        default:
            return state;
    }
}


export const setCurrentCrypto = (selectCrypto) => ({type: SELECT_CRYPTO, selectCrypto});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCoins = (coins) => ({type: SET_COINS, coins})

export const getAllCoins = () => async dispatch => {
    let data = await API.getAllCoins();
    dispatch(setCoins(data.data));
}

export const getTenCoins = () => async dispatch => {
    dispatch(setIsFetching(true));

    let data = await API.getTenCoins();

    dispatch(setCoins(data.data));
    dispatch(setIsFetching(false));
}


export default CoinListReducer;