import {Route, Switch} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PopularContainer from "../Popular/PopularContainer";
import CoinPageContainer from "../CoinChart/CoinChartContainer";
import Preloader from "../../Common/Preloader/Preloader";
import {initializeApp} from "../../Redux/AppReducer";

import './App.css';



const App = (props) => {

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
            <Header/>
                <Switch>
                    <Route exact path="/"
                           render={() => <PopularContainer />}
                    />
                    <Route exact path="/chart"
                           render={() => <CoinPageContainer />}
                    />
                </Switch>

        </>
    );
}

const mapStateToProps = state => {
    return {
        initialized: state.AppPage.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App);
