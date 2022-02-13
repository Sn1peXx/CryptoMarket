import Wallet from "./Wallet";
import {connect} from "react-redux";
import {setDeal, setNewBalance} from "../../Redux/TradeReducer";
import {Redirect} from "react-router-dom";

const WalletContainer = (props) => {

    if (!JSON.parse(localStorage.getItem("user"))) {
        return <Redirect to={"/login"} />
    }

    return (
       <>
           <Wallet activeDeal={props.activeDeal} setNewBalance={props.setNewBalance} balance={props.balance} />
       </>
    )
}

const mapStateToProps = state => {
    return {
        activeDeal: state.TradePage.activeDeal,
        balance: state.TradePage.balance
    }
}

export default connect(mapStateToProps, {setDeal, setNewBalance})(WalletContainer);
