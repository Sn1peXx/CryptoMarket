import {API} from "../../API/api";
import {useEffect, useState} from "react";

import CoinPage from "./CoinPage";
import initChart from "../../services/initChart";


const CoinPageContainer = ({crypto}) => {
    const [latestPrice, setLatestPrice] = useState(0);

    useEffect(() => {
        fetchData().then((chartData) => {
            initChart(chartData);
            setLatestPrice(parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2));
        });
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
        <CoinPage latestPrice={latestPrice} />
    )

}

export default CoinPageContainer;