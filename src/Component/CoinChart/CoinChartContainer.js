import {API} from "../../API/api";
import {useEffect, useState} from "react";
import {connect} from "react-redux";

import CoinChart from "./CoinChart";
import initChart from "../../services/initChart";
import Preloader from "../../Common/Preloader/Preloader";
import {getTenCoins, setCurrentCrypto} from "../../Redux/CoinListReducer";
import {addNewDeal, addOrder, changeMyBalance, setNewArrOrder} from "../../Redux/TradeReducer";


const CoinChartContainer = (props) => {

    const [latestPrice, setLatestPrice] = useState(0);
    const [coinsData, setCoinsData] = useState([]);
    const [isFetching, setFetching] = useState(true);
    const [timeframe, setTimeframe] = useState(365);

    const fetchData = async () => {
        let data = { index: [], price: [], volumes: [] };
        let result = await API.getChartCoin(props.selectCrypto, timeframe);
        for (const item of result.prices) {
            data.index.push(item[0]);
            data.price.push(item[1]);
        }
        for (const item of result.total_volumes) data.volumes.push(item[1]);

        return data;
    };

    useEffect(() => {
        fetchData().then((chartData) => {
            initChart(chartData);
            setLatestPrice(parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2));
        });

        API.getExactCoin(props.selectCrypto)
            .then(res => {
                setCoinsData(res.data);
                setFetching(false);
            })
            .catch(e => console.error(e));

    }, [timeframe]);

    useEffect(() => {
        props.getTenCoins();
    }, []);


    return (
        <>
            {isFetching
                ? <Preloader />
                : <>
                    <CoinChart
                        coins={props.coins}
                        balance={props.balance}
                        setCurrentCrypto={props.setCurrentCrypto}
                        selectCrypto={props.selectCrypto}
                        latestPrice={latestPrice}
                        coinsData={coinsData}
                        setTimeframe={setTimeframe}
                        addOrder={props.addOrder}
                        changeMyBalance={props.changeMyBalance}
                        addNewDeal={props.addNewDeal}
                        activeDeal={props.activeDeal}
                        setNewArrOrder={props.setNewArrOrder}
                    />
                 </>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        selectCrypto: state.CoinListPage.selectCrypto,
        coins: state.CoinListPage.coins,
        balance: state.TradePage.balance,
        activeDeal: state.TradePage.activeDeal
    }
}

export default connect(mapStateToProps, {getTenCoins, setCurrentCrypto, addOrder, addNewDeal, setNewArrOrder, changeMyBalance})(CoinChartContainer);