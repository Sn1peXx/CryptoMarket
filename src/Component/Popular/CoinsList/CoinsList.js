import '../cryptoTable.css';

const CoinsList = ({name, price, symbol, volume, image, priceChange}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto' width={25} />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'><b>${price}</b></p>
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
    )
}

export default CoinsList;