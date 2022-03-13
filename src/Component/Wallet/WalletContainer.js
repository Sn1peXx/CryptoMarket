import Wallet from "./Wallet";
import {connect} from "react-redux";
import {setDeal, setNewBalance} from "../../Redux/TradeReducer";

const WalletContainer = (props) => {

    return (
       <>
           <Wallet activeDeal={props.activeDeal} setNewBalance={props.setNewBalance} balance={props.balance} />
       </>
    )
}

const mapStateToProps = (state) => {
    return {
        balance: state.TradePage.balance,
        activeDeal: state.TradePage.activeDeal
    }
}

export default connect(mapStateToProps, {setDeal, setNewBalance})(WalletContainer);
