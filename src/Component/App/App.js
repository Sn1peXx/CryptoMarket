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


import './App.css';
import {getDatabase, onValue, ref, set} from "firebase/database";


const App = (props) => {

   try {
       if (JSON.parse(localStorage.getItem("user")).length === 3) {
           window.store.getState().LoginPage.isAuth = true;
       }
   } catch (e) {}

    useEffect(() => {
        props.initializeApp();
    }, [props.initialized]);


    // Чтение из базы данных
        useEffect(() => {
            const db = getDatabase();
            const userId = JSON.parse(localStorage.getItem("user"))[2];

            const starCountRef = ref(db, 'OrderHistory/' + userId);
            onValue(starCountRef, (snapshot) => {
                try {
                    let res = Object.values(snapshot.val())
                    window.order = res;
                } catch (e) {}
            });

            const starCountRef2 = ref(db, 'Balance/' + userId);
            onValue(starCountRef2, (snapshot) => {
                try {
                    let res = Object.values(snapshot.val())
                    console.log(res[0])
                    window.balance = res[0];
                } catch (e) {}

            });
        }, [])



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
                </Switch>

        </>
    );
}

const mapStateToProps = state => {
    return {
        initialized: state.AppPage.initialized,
    }
}

export default connect(mapStateToProps, {initializeApp})(App);
