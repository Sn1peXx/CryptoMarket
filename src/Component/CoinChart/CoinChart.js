import Footer from "../Footer/Footer";

import './CoinPage.css';
import CoinRec from "./CoinRecomended/CoinRec";
import CoinTrade from "./CoinTrade/CoinTrade";
import {setNewArrOrder} from "../../Redux/TradeReducer";


const CoinChart = ({latestPrice, coinsData, setTimeframe, coins, setCurrentCrypto, addOrder, addNewDeal, balance, changeMyBalance, activeDeal, setNewArrOrder}) => {

    const offerCoins = coins.slice(5, 14);

    let changePerDay = coinsData.market_data.price_change_percentage_24h;

    const buttonsArr = [
        {label: '1 День', data: 1},
        {label: '3 Дня', data: 3},
        {label: '1 Неделя', data: 7},
        {label: '1 Месяц', data: 30},
        {label: '6 Месяцев', data: 182},
        {label: '1 Год', data: 365}
    ];

    const buttons = buttonsArr.map(({label, data}) => {
        return (
            <button type="button" className="button_chart btn first" key={data}
                    onClick={() => setTimeframe(data)}>{label}</button>
        )
    });

    const timeHandler = (time) => {
        setTimeframe(time)
    }

    return (
        <>
            <div className="container">
                <div className="coin_page">
                    <div className="crypto_info">
                        <img src={coinsData.image.large} alt="" width={50}/>
                        <h2 className='name_coin'>{coinsData.name} </h2> <span className="text_coin"> цена </span>
                        <strong
                            className="price_coin">${latestPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
                    </div>
                    <div className="day_change_coin"><span className="change_text">Изменение за день</span>
                        {changePerDay < 0 ? (
                            <p className='coin-percent coin_per red'>{changePerDay.toFixed(2)}%</p>
                        ) : (
                            <p className='coin-percent coin_per green'>{changePerDay.toFixed(2)}%</p>
                        )}
                    </div>
                    <div id='chart' className='p-0 m-0'/>
                </div>
                <div className="coin_group">
                    <div className="coin_left">
                        <h4 className="button_setting">Настройки ТФ</h4>
                        <div className="button_group_time">
                            {buttons}
                        </div>
                        <CoinTrade coinsData={coinsData} activeDeal={activeDeal} setNewArrOrder={setNewArrOrder} addNewDeal={addNewDeal} changeMyBalance={changeMyBalance} latestPrice={latestPrice} balance={balance} addOrder={addOrder} />
                    </div>

                    <div className="coin_right">
                        <h4 className="button_setting">Часто просматриваемые</h4>
                        {offerCoins.map(coin => {
                            return (
                                <CoinRec
                                    key={coin.id}
                                    id={coin.id}
                                    name={coin.name}
                                    price={coin.current_price}
                                    symbol={coin.symbol}
                                    volume={coin.market_cap}
                                    image={coin.image}
                                    priceChange={coin.price_change_percentage_24h}
                                    coin={coin}
                                    setCurrentCrypto={setCurrentCrypto}
                                    timeHandler={timeHandler}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default CoinChart;