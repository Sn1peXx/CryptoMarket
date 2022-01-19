import {useEffect, useState} from "react";
import {API} from "../../API/api";
import CoinsList from "./CoinsList/CoinsList";
import {NavLink} from "react-router-dom";

const PopularContainer = ({getCrypto}) => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        API.getTenCoins()
            .then(res => {
                setCoins(res.data);
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <h3 className='coin-text'>Популярные</h3>
                {coins.map(coin => {
                    return (
                        <CoinsList
                            key={coin.id}
                            id={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                            getCrypto={getCrypto}
                        />
                    )
                })}
            </div>
            <NavLink className="popular_link" to={"/all"}>Посмотреть цены на другие криптовалюты</NavLink>
        </div>
    )

}

export default PopularContainer;