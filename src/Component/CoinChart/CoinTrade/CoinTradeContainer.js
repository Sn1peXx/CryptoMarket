import {connect} from "react-redux";
import {addNewDeal, addOrder, setNewBalance, setNewArrOrder} from "../../../Redux/TradeReducer";
import CoinTrade from "./CoinTrade";
import {useState} from "react";


const CoinTradeContainer = (props) => {

    const [orderValue, setOrderValue] = useState(0);
    const [isBuyVisible, setBuyVisible] = useState(true);

    let availableToSell = 0;

    const onChangeOpenOrder = (status) => {
        setBuyVisible(status)
    }

    // Покупка
    const buyCurrentCoin = (coin, orderValue) => {
        if (orderValue === 0) {
            return 0;
        }

        const dealDate = new Date().toLocaleDateString();

        const dealVolume = orderValue / props.latestPrice;
        const newBalance = props.balance - orderValue;

        props.addNewDeal(coin, dealVolume);
        props.addOrder(coin, orderValue, dealVolume, dealDate);
        props.setNewBalance(newBalance);

        setOrderValue(0);
    }

    // ПОлучение данных о покупке
    const updateOrderHandler = ({target}) => {

        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        setOrderValue(value)
    }

    // Продажа
    const sellCurrentCoin = (coin) => {
        const newArr = props.activeDeal.filter(item => {

            if (item.coin !== coin) {
                return item
            } else {
                props.setNewBalance(props.balance + (item.dealVolume * props.latestPrice));
            }

            calcRestHandler()
        });

        props.setNewArrOrder(newArr)
    }

    // Показывает кол-во токенов в наличии
    const calcRestHandler = () => {
        props.activeDeal.forEach(item => {
            if (item.coin === props.coinsData.id) {
                availableToSell += item.dealVolume
            }
        })
    }

    try {
        calcRestHandler()
    } catch(e) {}


    return (
        <CoinTrade
            coinsData={props.coinsData}
            latestPrice={props.latestPrice}
            orderValue={orderValue}
            isBuyVisible={isBuyVisible}
            availableToSell={availableToSell}
            onChangeOpenOrder={onChangeOpenOrder}
            buyCurrentCoin={buyCurrentCoin}
            updateOrderHandler={updateOrderHandler}
            sellCurrentCoin={sellCurrentCoin}
            balance={props.balance}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        balance: state.TradePage.balance,
        activeDeal: state.TradePage.activeDeal
    }
}

export default connect(mapStateToProps, {addOrder, addNewDeal, setNewBalance, setNewArrOrder})(CoinTradeContainer);