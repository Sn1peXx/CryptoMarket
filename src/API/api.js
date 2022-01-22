import axios from "axios";

export const API = {
    getTenCoins() {
        return axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=11&page=1&sparkline=false')
    },

    getAllCoins(page) {
        return axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
    },

    getExactCoin(crypto) {
        return axios.get(`https://api.coingecko.com/api/v3/coins/${crypto}`)
    },

    async getChartCoin (key, day = 365) {
        let response = await fetch(`https://api.coingecko.com/api/v3/coins/${key}/market_chart?vs_currency=usd&days=${day}&interval=1m`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return response.json();
    }

}