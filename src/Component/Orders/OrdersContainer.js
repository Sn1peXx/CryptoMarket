import Orders from "./Orders";
import {connect} from "react-redux";
import {setLoadingState, setOrder} from "../../Redux/TradeReducer";
import {useEffect} from "react";
import {DataBase} from "../../API/DataBase";
import {Redirect} from "react-router-dom";


const OrdersContainer = (props) => {

    useEffect(() => {
        DataBase.getOrderHistory();
    }, [])


    const showOrder = () => {
        props.setOrder(window.order);
        props.setLoadingState(false)
    }

    if (!window.store.getState().LoginPage.isAuth) return <Redirect to={"/login"} />

    return (
        <>
            {props.isLoadingData
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
        orders: state.TradePage.orders,
        isLoadingData: state.TradePage.isLoadingData
    }
}

export default connect(mapStateToProps, {setOrder, setLoadingState})(OrdersContainer);