import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {
    getAllCoins,
    getTenCoins,
    removeFavoritesCoinsFromArray,
    setCurrentCrypto,
    setFavoriteCoinsToArray
} from "../../Redux/CoinListReducer";

import Preloader from "../../Common/Preloader/Preloader";
import CoinsList from "./CoinsList/CoinsList";


const PopularContainer = (props) => {

    const [search, setSearch] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(false);


    // Подгрузка при скролле
    useEffect(() => {
        props.getTenCoins()

        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);


    useEffect(() => {
        if (fetching) {
            props.getAllCoins(currentPage)
                .then(() => {
                    setCurrentPage(prevState => prevState + 1)
                    if (currentPage !== 1) {
                        window.scrollTo(0, 200);
                    }
                })
                .finally(() => setFetching(false))
        }
    }, [fetching]);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 150) {
            setFetching(true)
        }
    };

    const handleChange = e => {
        setSearch(e.target.value);
        props.getAllCoins(1)
    };

    const filteredCoins = props.coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    const onToggleLike = id => {
        if (props.favoriteCoins.indexOf(id) === -1) {
            props.setFavoriteCoinsToArray(id)
        } else {
            props.removeFavoritesCoinsFromArray(id)
        }
    };

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
                                            onToggleLike={onToggleLike}
                                            favoriteCoins={props.favoriteCoins}
                                            coins={props.coins}
                                            {...props}
                                        />
                                    )
                                }) : <p className='coin_nothing'>Ничего не найдено</p>}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        selectCrypto: state.CoinListPage.selectCrypto,
        coins: state.CoinListPage.coins,
        isFetching: state.CoinListPage.isFetching,
        favoriteCoins: state.CoinListPage.favoriteCoins
    }
}


export default connect(mapStateToProps, {setCurrentCrypto, removeFavoritesCoinsFromArray, getAllCoins, getTenCoins, setFavoriteCoinsToArray})(PopularContainer);