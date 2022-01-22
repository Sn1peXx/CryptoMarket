import {API} from "../../API/api";
import {useEffect, useState} from "react";
import {connect} from "react-redux";

import CoinChart from "./CoinChart";
import initChart from "../../services/initChart";
import Preloader from "../../Common/Preloader/Preloader";


const CoinChartContainer = (props) => {

    const [latestPrice, setLatestPrice] = useState(0);
    const [coinsData, setCoinsData] = useState([]);
    const [isFetching, setFetching] = useState(true);

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
            .catch(e => console.error(e))
    }, []);


    const fetchData = async () => {
        let data = { index: [], price: [], volumes: [] };
        let result = await API.getChartCoin(props.selectCrypto);
        for (const item of result.prices) {
            data.index.push(item[0]);
            data.price.push(item[1]);
        }
        for (const item of result.total_volumes) data.volumes.push(item[1]);
        return data;
    };


    return (
        <>
            {isFetching
                ? <Preloader />
                : <>
                    <CoinChart latestPrice={latestPrice} coinsData={coinsData} />
                 </>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        selectCrypto: state.CoinListPage.selectCrypto
    }
}

export default connect(mapStateToProps, null)(CoinChartContainer);