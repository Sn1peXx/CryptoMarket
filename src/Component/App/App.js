import {Route, Switch} from "react-router-dom";
import {useState} from "react";

import Header from "../Header/Header";
import PopularContainer from "../Popular/PopularContainer";
import CoinPageContainer from "../CoinChart/CoinChartContainer";

import './App.css';


const App = () => {

    return (
        <>
            <Header/>
            <div className="container">
                <Switch>
                    <Route exact path="/"
                           render={() => <PopularContainer />}
                    />
                    <Route exact path="/chart"
                           render={() => <CoinPageContainer />}
                    />
                </Switch>

            </div>
        </>
    );
}

export default App;
