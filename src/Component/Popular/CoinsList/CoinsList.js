import '../cryptoTable.css';
import {NavLink} from "react-router-dom";

const CoinsList = ({name, price, symbol, volume, image, priceChange}) => {
    return (
        <div>
            <div className='coin-container'>
                <div className='coin-row'>
                    <div className='coin'>
                        <img src={image} alt='crypto' width={25} />
                        <h1>{name}</h1>
                        <p className='coin-symbol'>{symbol}</p>
                    </div>
                    <div className='coin-data'>
                        <p className='coin-price'><b>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b></p>
                        <p className='coin-volume'>${volume.toLocaleString()}</p>
                        <strong>
                            {priceChange < 0 ? (
                                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                            )}
                        </strong>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinsList;