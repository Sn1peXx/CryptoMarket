
const ADD_ORDER = 'trade/ADD_ORDER';
const MAKE_A_DEAL = 'trade/MAKE_A_DEAL';
const CHANGE_ACTIVE_DEAL = 'trade/CHANGE_ACTIVE_DEAL';
const REMOVE_ITEM_FROM_DEAL = 'trade/REMOVE_ITEM_FROM_DEAL';


const initialState = {
    orders: [], // Все сделки для просмотра
    activeDeal: [], // Открыте сделки для расчета прибыли/убытков
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

        case CHANGE_ACTIVE_DEAL:
            return {...state, activeDeal: action.activeDeal}

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



export default TradeReducer;