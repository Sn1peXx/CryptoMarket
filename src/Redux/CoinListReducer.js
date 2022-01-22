import {API} from "../API/api";

const SELECT_CRYPTO = 'coinlist/SELECT_CRYPTO';
const TOGGLE_IS_FETCHING = 'coinlist/TOGGLE_IS_FETCHING';
const SET_COINS = 'coinlist/SET_COINS';
const SET_FAVORITE_COINS = 'coinlist/SET_FAVORTITE_COINS';
const REMOVE_FAVORITE_COINS = 'coinlist/REMOVE_FAVORITE_COINS';

let initialState = {
    selectCrypto: 'bitcoin',
    isFetching: true,
    coins: [],
    favoriteCoins: []
}

const CoinListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CRYPTO:
            return {...state, selectCrypto: action.selectCrypto}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case SET_COINS:
            return {
                ...state,
                coins: action.coins
            }

        case SET_FAVORITE_COINS:
            return {
                ...state,
                favoriteCoins: [...state.favoriteCoins, action.favoriteId]
            }

        case REMOVE_FAVORITE_COINS:
            return {
                ...state,
                favoriteCoins: state.favoriteCoins.filter(id => id !== action.favoriteId)
            }

        default:
            return state;
    }
}


export const setCurrentCrypto = (selectCrypto) => ({type: SELECT_CRYPTO, selectCrypto});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCoins = (coins) => ({type: SET_COINS, coins});
export const setFavoriteCoinsToArray = (favoriteId) => ({type: SET_FAVORITE_COINS, favoriteId});
export const removeFavoritesCoinsFromArray = (favoriteId) => ({type: REMOVE_FAVORITE_COINS, favoriteId});


export const getAllCoins = (page) => async dispatch => {
    if (page <= 4) {
        let data = await API.getAllCoins(page);
        dispatch(setCoins(data.data));
    }

}

export const getTenCoins = () => async dispatch => {
    dispatch(setIsFetching(true));

    let data = await API.getTenCoins();

    dispatch(setCoins(data.data));
    dispatch(setIsFetching(false));
}


export default CoinListReducer;