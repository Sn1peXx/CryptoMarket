import {NavLink} from "react-router-dom";

import '../CoinList.css';


const CoinsList = ({id, name, price, symbol, volume, image, priceChange, setCurrentCrypto}) => {
    return (
            <div className="coin-link" >
                <div className='coin-container'>
                    <i className="far fa-star"/>
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