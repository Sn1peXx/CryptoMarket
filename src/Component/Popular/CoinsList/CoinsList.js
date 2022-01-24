import {NavLink} from "react-router-dom";

import '../CoinList.css';


const CoinsList = ({id, name, price, symbol, volume, image, priceChange, setCurrentCrypto, onToggleLike, favoriteCoins}) => {

    return (
        <div className="coin-link">
            <div  className={favoriteCoins.indexOf(id) === -1 ? 'coin-container' : 'coin-container favorite'}>
                <button className="fa-button" type="submit" onClick={() => onToggleLike(id)}>
                    <i className="fa fa-star"/>
                </button>
                <NavLink className='coin-row' to={'/chart'} onClick={() => setCurrentCrypto(id)}>
                    <div className='coin'>
                        <img src={image} alt='crypto' width={25} />
                        <p className="coin_name">{name}</p>
                        <p className='coin-symbol'>{symbol}</p>
                    </div>
                    <div className='coin-data'>
                        <p className='coin-price'>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p className='coin-volume'>${volume.toLocaleString()}</p>
                            {priceChange < 0 ? (
                                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                            )}
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default CoinsList;