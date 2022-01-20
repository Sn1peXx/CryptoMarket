import {useEffect, useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import CoinsList from "./CoinsList/CoinsList";
import {connect} from "react-redux";
import {getAllCoins, getTenCoins, setCurrentCrypto} from "../../Redux/CoinListReducer";


const PopularContainer = (props) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        props.getTenCoins()
    }, []);

    const showAllCryptoHandler = () => {
        props.getAllCoins();
        setVisible(false);
    }

    return (
        <>
            {props.isFetching
                ? <Preloader />
                : <div className='coin-app'>
                    <div className='coin-search'>
                        <h3 className='coin-text'>Популярные</h3>
                        {props.coins.map(coin => {
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
                                    {...props}
                                />
                            )
                        })}
                    </div>
                    {
                        visible &&  <button className="popular_link" onClick={() => showAllCryptoHandler()}>Посмотреть цены на другие криптовалюты </button>
                    }
                </div>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        selectCrypto: state.CoinListPage.selectCrypto,
        coins: state.CoinListPage.coins,
        isFetching: state.CoinListPage.isFetching
    }
}


export default connect(mapStateToProps, {setCurrentCrypto, getAllCoins, getTenCoins})(PopularContainer);