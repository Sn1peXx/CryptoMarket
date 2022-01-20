import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getAllCoins, getTenCoins, setCurrentCrypto} from "../../Redux/CoinListReducer";

import Preloader from "../../Common/Preloader/Preloader";
import CoinsList from "./CoinsList/CoinsList";


const PopularContainer = (props) => {

    const [visible, setVisible] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        props.getTenCoins()
    }, []);

    const showAllCryptoHandler = () => {
        props.getAllCoins();
        setVisible(false);
    }

    const handleChange = e => {
        setSearch(e.target.value);
        showAllCryptoHandler();
    };

    const filteredCoins = props.coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {props.isFetching
                ? <Preloader />
                : <>
                    <div className="container container_top">
                        <div className='coin-app'>
                            <div className='coin-search'>
                                <form>
                                    <input className='coin-input' type='text' onChange={handleChange} placeholder='Поиск'/>
                                </form>
                                <h3 className='coin-text'>Популярные</h3>
                                {filteredCoins.length !== 0 ? filteredCoins.map(coin => {
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
                                }) : <p className='coin_nothing'>Ничего не найдено</p>}
                            </div>
                            {
                                visible &&  <button className="popular_link" onClick={() => showAllCryptoHandler()}>Посмотреть цены на другие криптовалюты </button>
                            }
                        </div>
                    </div>
                </>
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