import './CoinPage.css';
import Footer from "../Footer/Footer";

const CoinChart = ({latestPrice, coinsData}) => {

    let changePerDay = coinsData.market_data.price_change_percentage_24h;

    setTimeout(() => 2000)

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
            </div>
            <Footer/>
        </>


    )
}

export default CoinChart;