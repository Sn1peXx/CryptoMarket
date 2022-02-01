const CoinTrade = ({
                       latestPrice,
                       coinsData,
                       availableToSell,
                       buyCurrentCoin,
                       isBuyVisible,
                       onChangeOpenOrder,
                       orderValue,
                       sellCurrentCoin,
                       updateOrderHandler

                   }) => {


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
                        Доступно: <strong>{typeof window.balance === 'undefined' ?  'Что-то пошло не так' : window.balance.toFixed(2) + '$'}</strong>
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