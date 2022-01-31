import Wallet from "./Wallet";
import {connect} from "react-redux";
import {setDeal} from "../../Redux/TradeReducer";
import {useEffect, useState} from "react";
import {DataBase} from "../../API/DataBase";
import Preloader from "../../Common/Preloader/Preloader";

const WalletContainer = (props) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        DataBase.getNewDeal();
    }, [])

    let time = 1000

    setInterval(() => {
        if (typeof window.deal === 'undefined') {
            if (time === 2000) {
                props.setDeal(window.deal);
                setLoading(false);
            }
            time += 1000
        } else {
            props.setDeal(window.deal);
            setLoading(false);
        }
    }, time)


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
