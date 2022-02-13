import {Route, Switch} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import {initializeApp} from "../../Redux/AppReducer";

import PopularContainer from "../Popular/PopularContainer";
import CoinPageContainer from "../CoinChart/CoinChartContainer";
import Preloader from "../../Common/Preloader/Preloader";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import HeaderContainer from "../Header/HeaderContainer";
import OrdersContainer from "../Orders/OrdersContainer";
import WalletContainer from "../Wallet/WalletContainer";
import {changeIsAuth} from "../../Redux/LoginReducer";

import './App.css';


const App = (props) => {

   try {
       if (JSON.parse(localStorage.getItem("user")).length === 3) {
           props.changeIsAuth(true);
       }
   } catch (e) {}

    useEffect(() => {
        props.initializeApp();
    }, [props.initialized]);



    if (!props.initialized) {
        return (
            <div className="container">
                <div className="center">
                    <Preloader />
                </div>
            </div>
        )
    }

    return (
        <>
            <HeaderContainer/>
                <Switch>
                    <Route exact path="/"
                           render={() => <PopularContainer />}
                    />
                    <Route exact path="/chart"
                           render={() => <CoinPageContainer />}
                    />
                    <Route exact path="/login"
                           render={() => <Login />}
                    />
                    <Route exact path="/register"
                           render={() => <SignUp />}
                    />
                    <Route exact path="/orders"
                           render={() => <OrdersContainer />}
                    />
                    <Route exact path="/wallet"
                           render={() => <WalletContainer />}
                    />
                </Switch>

        </>
    );
}

const mapStateToProps = state => {
    return {
        initialized: state.AppPage.initialized,
    }
}

export default connect(mapStateToProps, {initializeApp, changeIsAuth})(App);
