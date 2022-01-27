import {useState} from "react";
import {getDatabase, ref, set, remove, update, onValue} from "firebase/database";


const CoinTrade = ({
                       latestPrice,
                       coinsData,
                       addOrder,
                       balance,
                       changeMyBalance,
                       setNewArrOrder,
                       addNewDeal
                   }) => {

    const db = getDatabase();
    const userId = JSON.parse(localStorage.getItem("user"))[2];

    const [orderValue, setOrderValue] = useState(0);
    const [isBuyVisible, setBuyVisible] = useState(true);

    let availableToSell = 0;


    const starCountRef3 = ref(db, 'NewDeal/' + userId);
    onValue(starCountRef3, (snapshot) => {
        try {
            let res = Object.values(snapshot.val())
            window.deal = res;
        } catch (e) {}
    });

    const onChangeOpenOrder = (status) => {
        setBuyVisible(status)
    }

    // ПОлучение данных о покупке
    const updateOrderHandler = ({target}) => {

        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        setOrderValue(value)
    }

    // Покупка
    const buyCurrentCoin = (coin, orderValue) => {
        const dealDate = new Date().toLocaleDateString();

        const dealVolume = orderValue / latestPrice;
        const newBalance = balance - orderValue;

        const id = (Math.random() * (10000000 - 1) + 1).toFixed(0);

        changeMyBalance(newBalance);
        addNewDeal(coin, dealVolume);
        addOrder(coin, orderValue, dealVolume, dealDate);

        // История
        set(ref(db, 'OrderHistory/' + userId + `/${id}`), {
            id,
            coin,
            orderValue,
            dealVolume,
            dealDate
        }).catch(() => {
            alert('Ошибка')
        })

        // Сделки
        set(ref(db, 'NewDeal/' + userId + `/${id}`), {
            id,
            coin,
            dealVolume
        }).catch(() => {
            alert('Ошибка')
        })

        update(ref(db, 'Balance/' + userId), {
            balance: newBalance
        })

        setOrderValue(0);
    }
    //
    // console.log(window.deal, 'deal')
    // console.log(window.order, 'order')

    // Продажа
    const sellCurrentCoin = (coin) => {
        let newBalance = 0;
        const newArr = window.deal.filter(item => {

            if (item.coin !== coin) {
                return item
            } else {
                newBalance += window.balance + (item.dealVolume * latestPrice)
                remove(ref(db, 'NewDeal/' + userId + `/${item.id}`))
            }
            calcRestHandler()
        });

        update(ref(db, 'Balance/' + userId), {
            balance: newBalance
        })

        changeMyBalance(newBalance);
        setNewArrOrder(newArr)

        window.location.reload();
    }

    console.log(window.deal)

    // Показывает кол-во токенов в наличии
    // console.log(window.order)
    const calcRestHandler = () => {
        window.deal.forEach(item => {
            if (item.coin === coinsData.id) {
                availableToSell += item.dealVolume
            }
        })
    }

    try {
        calcRestHandler()
    } catch(e) {}


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
                        Доступно: <strong>{window.balance || null}$</strong>
                    </p>
                    <div className="order_cost">
                        <p className="order_price_text">Цена</p>
                        <p className="order_price_dig"><span
                            style={{paddingRight: "20px", fontWeight: "500"}}>${latestPrice}</span> USDT</p>
                    </div>
                    <input className="order_input" id="num1" max={window.balance} type="number"
                           value={Number(orderValue).toString()}
                           onChange={updateOrderHandler}/><span className="order_dollar">$</span>
                    <br/>
                    <input className="order_range" type="range" max={window.balance} value={orderValue}
                           onChange={updateOrderHandler}/>
                    <br/>
                    <button onClick={() => buyCurrentCoin(coinsData.id, orderValue)}
                            className="button_trans_buy">Купить {coinsData.name}</button>
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
                    <button onClick={() => sellCurrentCoin(coinsData.id)}
                            className="button_trans_sell">Продать {coinsData.name}</button>
                </div>
            }
        </>
    )
}

export default CoinTrade;