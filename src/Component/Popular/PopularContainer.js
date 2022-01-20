import {useEffect, useState} from "react";
import {API} from "../../API/api";
import Preloader from "../../Common/Preloader/Preloader";
import CoinsList from "./CoinsList/CoinsList";


const PopularContainer = ({getCrypto}) => {

    const [coins, setCoins] = useState([]);
    const [isFetching, setFetching] = useState(true);

    useEffect(() => {
        API.getTenCoins()
            .then(res => {
                setCoins(res.data);
                setFetching(false);
            })
            .catch(e => console.error(e));
    }, []);

    const showAllCryptoHandler = () => {
        API.getAllCoins()
            .then(res => {
                setCoins(res.data);
            })
            .catch(e => console.error(e))
    }

    return (
        <>
            {isFetching
                ? <Preloader />
                : <div className='coin-app'>
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
                    <button className="popular_link" onClick={() => showAllCryptoHandler()} >Посмотреть цены на другие криптовалюты</button>
                </div>
            }
        </>

    )

}

export default PopularContainer;