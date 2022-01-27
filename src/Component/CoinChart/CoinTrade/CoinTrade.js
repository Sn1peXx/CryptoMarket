import {useState} from "react";

const CoinTrade = ({latestPrice, coinsData, addOrder, balance, changeMyBalance, activeDeal, setNewArrOrder, addNewDeal}) => {

    const [orderValue, setOrderValue] = useState(0);
    const [isBuyVisible, setBuyVisible] = useState(true);

    let availableToSell = 0;

    const onChangeOpenOrder = (status) => {
        setBuyVisible(status)
    }

    const updateOrderHandler = ({target}) => {

        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        setOrderValue(value)
    }


    const buyCurrentCoin = (coin, orderValue) => {
        const dealDate = new Date();
        const dealVolume = orderValue / latestPrice;
        const newBalance = balance - orderValue;

        changeMyBalance(newBalance);
        addNewDeal(coin, dealVolume);
        addOrder(coin, orderValue, dealVolume, dealDate)

        setOrderValue(0);
    }

    const sellCurrentCoin = (coin) => {
        let newBalance = 0;
        const newArr = activeDeal.filter(item => {

            if (item.coin !== coin) {
                return item;
            }

            newBalance += balance + (item.dealVolume * latestPrice)

        });

        changeMyBalance(newBalance);
        setNewArrOrder(newArr)
    }


    activeDeal.forEach(item => {
        if (item.coin === coinsData.id) {
            availableToSell += item.dealVolume
        }
    })


    return (
        <>
            <div className="button_setting">Оред</div>
            <div className="btn_order_group">
                <button onClick={() => onChangeOpenOrder(true)} className="btn_order buy_btn">Купить</button>
                <button onClick={() => onChangeOpenOrder(false)} className="btn_order sell_btn">Продать</button>
            </div>

            {isBuyVisible ?
                <div className="order order_buy">
                    <p className="order_available">
                        Доступно: <strong>{balance.toFixed(2)}$</strong>
                    </p>
                    <div className="order_cost">
                        <p className="order_price_text">Цена</p>
                        <p className="order_price_dig"><span
                            style={{paddingRight: "20px", fontWeight: "500"}}>${latestPrice}</span> USDT</p>
                    </div>
                    <input className="order_input" id="num1" max={balance} type="number"
                           value={Number(orderValue).toString()}
                           onChange={updateOrderHandler}/><span className="order_dollar">$</span>
                    <br/>
                    <input className="order_range" type="range" max={balance} value={orderValue}
                           onChange={updateOrderHandler}/>
                    <br/>
                    <button onClick={() => buyCurrentCoin(coinsData.id, orderValue)} className="button_trans_buy">Купить {coinsData.name}</button>
                </div>

                :

                <div className="order order_sell">
                    <p className="order_available">
                        Доступно: <strong>{availableToSell.toFixed(4)} {coinsData.symbol}</strong>
                    </p>
                    <div className="order_cost">
                        <p className="order_price_text">Цена</p>
                        <p className="order_price_dig"><span
                            style={{paddingRight: "20px", fontWeight: "500"}}>${latestPrice}</span> USDT</p>
                    </div>
                    <br/>
                    <button onClick={() => sellCurrentCoin(coinsData.id)} className="button_trans_sell">Продать {coinsData.name}</button>
                </div>
            }
        </>
    )
}

export default CoinTrade;