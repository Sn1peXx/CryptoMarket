import Orders from "./Orders";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const OrdersContainer = (props) => {

    return (
        <>
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

        </>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.TradePage.orders,
        isLoadingData: state.TradePage.isLoadingData
    }
}

export default connect(mapStateToProps, null)(OrdersContainer);