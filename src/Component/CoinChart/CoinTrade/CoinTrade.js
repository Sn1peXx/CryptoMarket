import {useState} from "react";

const CoinTrade = ({latestPrice, coinsData}) => {

    const [orderValue, setOrderValue] = useState(0);

    const updateOrderHandler = ({target}) => {

        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        setOrderValue(value)
    }

    return (
        <>
            <div className="button_setting">Оред</div>
            <div className="btn_order_group">
                <button className="btn_order buy_btn">Купить</button>
                <button className="btn_order sell_btn">Продать</button>
            </div>
            <div className="order">
                <p className="order_available">
                    Доступно <strong>235$</strong>
                </p>
                <div className="order_cost">
                    <p className="order_price_text">Цена</p>
                    <p className="order_price_dig"><span
                        style={{paddingRight: "20px", fontWeight: "500"}}>${latestPrice}</span> USDT</p>
                </div>
                <input className="order_input" id="num1" max="235" type="number" value={Number(orderValue).toString()}
                       onChange={updateOrderHandler}/><span className="order_dollar">$</span>
                <br/>
                <input className="order_range" type="range" max="235" value={orderValue} onChange={updateOrderHandler}/>
                <br/>
                <button className="button_trans_buy">Купить {coinsData.name}</button>
                {/*<button className="button_trans_sell">Продать {coinsData.name}</button>*/}
            </div>
        </>
    )
}

export default CoinTrade;