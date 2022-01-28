import Orders from "./Orders";
import {connect} from "react-redux";
import {setOrder} from "../../Redux/TradeReducer";
import {useEffect, useState} from "react";
import {DataBase} from "../../API/DataBase";


const OrdersContainer = (props) => {

    const [isShow, setShow] = useState(true);

    useEffect(() => {
        DataBase.getOrderHistory();
    }, [])


    const showOrder = () => {
        props.setOrder(window.order);
        setShow(!isShow)
    }


    return (
        <>
            {isShow
                ? <button className="order_btn" onClick={() => showOrder()}>Показать</button>
                :
                <div className="table_order">
                    <table>
                        <tbody>
                        <tr>
                            <th>Дата</th>
                            <th>Пара</th>
                            <th>Сумма</th>
                            <th>Количество</th>
                        </tr>
                        {
                            props.orders.map(item => {
                                return (
                                    <Orders key={item.id} coin={item.coin} dealDate={item.dealDate} orderValue={item.orderValue} dealVolume={item.dealVolume}/>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.TradePage.orders
    }
}

export default connect(mapStateToProps, {setOrder})(OrdersContainer);