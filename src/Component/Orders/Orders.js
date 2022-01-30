import './Orders.css'


const Orders = ({coin, dealVolume, dealDate, orderValue}) => {

    return (
        <tr><td>{dealDate}</td><td>{coin.toUpperCase()}</td><td>{orderValue}</td><td>{dealVolume.toFixed(4)}</td></tr>
    )
}

export default Orders;