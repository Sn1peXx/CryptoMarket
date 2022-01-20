import {API} from "../../API/api";
import {useEffect, useState} from "react";

import CoinPage from "./CoinPage";
import initChart from "../../services/initChart";
import Preloader from "../../Common/Preloader/Preloader";


const CoinPageContainer = ({crypto}) => {

    const [latestPrice, setLatestPrice] = useState(0);
    const [coinsData, setCoinsData] = useState([]);
    const [isFetching, setFetching] = useState(true);

    useEffect(() => {
        fetchData().then((chartData) => {
            initChart(chartData);
            setLatestPrice(parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2));
        });

        API.getExactCoin(crypto)
            .then(res => {
                setCoinsData(res.data);
                setFetching(false);
            })
            .catch(e => console.error(e))
    }, []);


    const fetchData = async () => {
        let data = { index: [], price: [], volumes: [] };
        let result = await API.getChartCoin(crypto);
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
                : <CoinPage latestPrice={latestPrice} coinsData={coinsData} />
            }
        </>
    )

}

export default CoinPageContainer;