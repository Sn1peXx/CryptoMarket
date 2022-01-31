const ADD_ORDER = 'trade/ADD_ORDER';
const MAKE_A_DEAL = 'trade/MAKE_A_DEAL';
const REMOVE_ITEM_FROM_DEAL = 'trade/REMOVE_ITEM_FROM_DEAL';
const SET_ORDER = 'trade/SET_ORDER'
const CHANGE_LOADING_STATE = 'trade/CHANGE_LOADING_STATE';
const SET_DEAL = 'trade/SET_DEAL';

const initialState = {
    orders: [], // Все сделки для просмотра
    activeDeal: [], // Открыте сделки для расчета прибыли/убытков
    isLoadingData: true
}

let id = 1;
let idDeal = 1;

const TradeReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_ORDER:
            const newOrder = {
                id: id++,
                coin: action.coin,
                dealPrice: action.dealPrice,
                dealVolume: action.dealVolume,
                dealDate: action.dealDate
            }

            state.orders.push(newOrder);

            return state;

        case SET_ORDER:
            return {...state, orders: action.orders}

        case SET_DEAL:
            return {...state, activeDeal: action.activeDeal}

        case MAKE_A_DEAL:
            const newDeal = {
                id: idDeal++,
                coin: action.coin,
                dealVolume: action.dealVolume
            }

            state.activeDeal.push(newDeal);

            return state;

        case REMOVE_ITEM_FROM_DEAL:
            return {...state, activeDeal: action.newArr}

        case CHANGE_LOADING_STATE:
            return {...state, isLoadingData: action.isLoadingData}

        default:
            return state
    }
}


export const addOrder = (coin, dealPrice, dealVolume, dealDate) => {
    return {
        type: ADD_ORDER,
        coin, dealPrice, dealVolume, dealDate
    }
}
export const addNewDeal = (coin, dealVolume) => ({type: MAKE_A_DEAL, coin, dealVolume});
export const setNewArrOrder = (newArr) => ({type: REMOVE_ITEM_FROM_DEAL, newArr});
export const setOrder = (orders) => ({type:SET_ORDER, orders});
export const setDeal = activeDeal => ({type: SET_DEAL, activeDeal});
export const setLoadingState = isLoading => ({type: CHANGE_LOADING_STATE, isLoading});


export default TradeReducer;