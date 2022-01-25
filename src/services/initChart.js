import Plotly from 'plotly.js-dist-min'

const initChart = async (data) => {
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
        width: 1170,
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
    await Plotly.newPlot("chart", series, layout, config);
};

export default initChart;