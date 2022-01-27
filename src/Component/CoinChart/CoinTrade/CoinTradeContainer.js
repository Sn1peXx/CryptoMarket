import {connect} from "react-redux";
import {addNewDeal, addOrder, changeMyBalance, setNewArrOrder} from "../../../Redux/TradeReducer";
import CoinTrade from "./CoinTrade";


const CoinTradeContainer = (props) => {
    return (
        <CoinTrade
            coinsData={props.coinsData}
            latestPrice={props.latestPrice}
            balance={props.balance}
            activeDeal={props.activeDeal}
            addOrder={props.addOrder}
            addNewDeal={props.addNewDeal}
            setNewArrOrder={props.setNewArrOrder}
            changeMyBalance={props.changeMyBalance}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        balance: state.TradePage.balance,
        activeDeal: state.TradePage.activeDeal
    }
}

export default connect(mapStateToProps, {addOrder, addNewDeal, setNewArrOrder, changeMyBalance})(CoinTradeContainer);