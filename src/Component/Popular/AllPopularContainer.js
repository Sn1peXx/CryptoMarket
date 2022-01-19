import {API} from "../../API/api";
import {useEffect, useState} from "react";
import CoinsList from "./CoinsList/CoinsList";


const AllPopularContainer = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        API.getAllCoins()
            .then(res => {
                setCoins(res.data);
            })
            .catch(e => console.error(e))
    }, []);

    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <h3 className='coin-text'>Популярные</h3>
                {coins.map(coin => {
                    return (
                        <CoinsList
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AllPopularContainer;