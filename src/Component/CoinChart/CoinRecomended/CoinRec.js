import {NavLink} from "react-router-dom";

const CoinRec = ({id, name, price, symbol, image, priceChange, setCurrentCrypto, timeHandler}) => {

    return (
        <div className="coin-link">
            <div  className='coin_cr'>
                <NavLink className='coin-row coin_cr' to={'/chart'} onClick={() => {
                    timeHandler(Math.floor(Math.random() * 4) + 1)
                    setCurrentCrypto(id);
                }}>
                    <div className='coin'>
                        <img src={image} alt='crypto' width={25} />
                        <p className="coin_name">{name}</p>
                        <p className='coin-symbol'>{symbol}</p>
                    </div>
                    <div className='coin-data'>
                        <p className='coin-price'>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
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

export default CoinRec;