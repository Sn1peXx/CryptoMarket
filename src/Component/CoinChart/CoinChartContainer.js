import {API} from "../../API/api";
import {useEffect, useState} from "react";
import {connect} from "react-redux";

import CoinChart from "./CoinChart";
import initChart from "../../services/initChart";
import Preloader from "../../Common/Preloader/Preloader";
import {getTenCoins, setCurrentCrypto} from "../../Redux/CoinListReducer";
import {Redirect} from "react-router-dom";


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


    const element = document.querySelector("#chart");

    return (
        <>
            {isFetching && !(typeof(element) != 'undefined' && element != null)
                ? <Preloader />
                : <>
                    <CoinChart
                        coins={props.coins}
                        setCurrentCrypto={props.setCurrentCrypto}
                        selectCrypto={props.selectCrypto}
                        latestPrice={latestPrice}
                        coinsData={coinsData}
                        setTimeframe={setTimeframe}
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
    }
}

export default connect(mapStateToProps, {getTenCoins, setCurrentCrypto})(CoinChartContainer);