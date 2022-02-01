import Wallet from "./Wallet";
import {connect} from "react-redux";
import {setDeal} from "../../Redux/TradeReducer";
import {useEffect, useState} from "react";
import {DataBase} from "../../API/DataBase";
import Preloader from "../../Common/Preloader/Preloader";
import {Redirect} from "react-router-dom";

const WalletContainer = (props) => {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        DataBase.getNewDeal();
    }, [])


    setTimeout(() => {
        if (typeof window.deal === 'undefined') {
            setLoading(false);
        } else {
            props.setDeal(window.deal);
            setLoading(false);
        }
    }, 2000)


    if (!window.store.getState().LoginPage.isAuth) return <Redirect to={"/login"} />

    return (
       <>
           {isLoading ? <Preloader/> : <Wallet activeDeal={props.activeDeal} />}
       </>
    )
}

const mapStateToProps = state => {
    return {
        activeDeal: state.TradePage.activeDeal,
    }
}

export default connect(mapStateToProps, {setDeal})(WalletContainer);
