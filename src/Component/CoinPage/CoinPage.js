// import React, { useRef, useEffect, useState } from "react";
import {callAPI} from "../../API/api";
import Plotly from 'plotly.js-dist-min'
import {useEffect, useState} from "react";

const CoinPage = () => {

    const [latestPrice, setLatestPrice] = useState(0);

    useEffect(() => {
        fetchData().then((chartData) => {
            initChart(chartData);
            setLatestPrice(parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2));
        });
    }, []);

    const fetchData = async () => {
        let data = { index: [], price: [], volumes: [] };
        let result = await callAPI("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=14&interval=1m");
        for (const item of result.prices) {
            data.index.push(item[0]);
            data.price.push(item[1]);
        }
        for (const item of result.total_volumes) data.volumes.push(item[1]);
        return data;
    };

    const initChart = (data) => {
        let trace_price = {
            name: "Price ($)",
            x: data.index.map((t) => new Date(t)),
            y: data.price,
            xaxis: "x",
            yaxis: "y",
            type: "scatter",
            mode: "lines",
            marker: { color: "black", size: 2 },
        };
        let trace_volumes = {
            name: "Volumne ($B)",
            x: data.index.map((t) => new Date(t)),
            y: data.volumes,
            xaxis: "x",
            yaxis: "y2",
            type: "bar",
            barmode: "relative",
            marker: {
                color: "rgb(49,130,189)",
                opacity: 0.7,
            },
        };
        let layout = {
            autosize: false,
            height: 700,
            width: 1300,
            margin: {
                l: 50,
                r: 20,
                t: 35,
                pad: 3,
            },
            hovermode: "x unified",
            showlegend: false,
            xaxis : {
                fixedrange: true,
                showspikes: true,
                domain: [1, 1],
                anchor: "y2",
            },
            yaxis: {
                fixedrange: true,
                domain: [0.1, 1],
                anchor: "x",
            },
            yaxis2: {
                showticklabels: false,
                domain: [0, 0.1],
                anchor: "x",
            },
            grid: {
                roworder: "bottom to top",
            },
        };
        let config = { responsive: false, displayModeBar: false };
        let series = [trace_price, trace_volumes];
        Plotly.newPlot("chart", series, layout, config);
    };

    return (
        <>
            <h2 className='text-center text-primary'>${latestPrice}</h2>
            <div id='chart' className='p-0 m-0'/>
        </>
    );

}

export default CoinPage;