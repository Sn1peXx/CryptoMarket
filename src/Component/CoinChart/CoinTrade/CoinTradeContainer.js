import {connect} from "react-redux";
import {addNewDeal, addOrder, setNewArrOrder} from "../../../Redux/TradeReducer";
import CoinTrade from "./CoinTrade";
import {DataBase} from "../../../API/DataBase";
import {useEffect, useState} from "react";


const CoinTradeContainer = (props) => {

    const [orderValue, setOrderValue] = useState(0);
    const [isBuyVisible, setBuyVisible] = useState(true);

    let availableToSell = 0;

    useEffect(() => {
        DataBase.getBalance();
    }, []);

    const onChangeOpenOrder = (status) => {
        setBuyVisible(status)
    }

    // Покупка
    const buyCurrentCoin = (coin, orderValue) => {
        const dealDate = new Date().toLocaleDateString();

        const dealVolume = orderValue / props.latestPrice;
        const newBalance = window.balance - orderValue;

        const id = (Math.random() * (10000000 - 1) + 1).toFixed(0);

        // changeMyBalance(newBalance);
        addNewDeal(coin, dealVolume);
        addOrder(coin, orderValue, dealVolume, dealDate);

        // История
        DataBase.setOrderHistory(id, coin,  orderValue, dealVolume, dealDate);

        // Сделки
        DataBase.setNewDeal(id, coin, dealVolume);

        // Обновление баланса
        DataBase.updateBalance(newBalance)

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
        let newBalance = 0;
        const newArr = window.deal.filter(item => {

            if (item.coin !== coin) {
                return item
            } else {
                newBalance += window.balance + (item.dealVolume * props.latestPrice)
                DataBase.closeDeal(item.id)
            }
            calcRestHandler()
        });

        DataBase.updateBalance(newBalance)

        setNewArrOrder(newArr)

        window.location.reload();
    }

    // Показывает кол-во токенов в наличии
    const calcRestHandler = () => {
        window.deal.forEach(item => {
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
        />
    )
}

const mapStateToProps = (state) => {
    return {
        balance: state.TradePage.balance,
        activeDeal: state.TradePage.activeDeal
    }
}

export default connect(mapStateToProps, {addOrder, addNewDeal, setNewArrOrder})(CoinTradeContainer);