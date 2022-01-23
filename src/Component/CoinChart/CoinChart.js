import Footer from "../Footer/Footer";

import './CoinPage.css';


const CoinChart = ({latestPrice, coinsData, setTimeframe}) => {

    let changePerDay = coinsData.market_data.price_change_percentage_24h;

    setTimeout(() => 2000);

    const buttonsArr = [
        {label: '1 День', data: 1},
        {label: '1 Неделя', data: 7},
        {label: '1 Месяц', data: 30},
        {label: '1 Год', data: 365}
    ]

    const buttons = buttonsArr.map(({label, data}) => {
        return (
            <button type="button" className="button_chart" onClick={() => setTimeframe(data)}>{label}</button>
        )
    })

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
                <h4 className="button_setting">Настройки ТФ</h4>
               <div className="button_group_time">
                   {buttons}
               </div>
            </div>
            <Footer/>
        </>


    )
}

export default CoinChart;