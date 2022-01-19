import {Route, Switch} from "react-router-dom";
import {useState} from "react";

import Header from "../Header/Header";
import PopularContainer from "../Popular/PopularContainer";
import AllPopularContainer from "../Popular/AllPopularContainer";
import CoinPageContainer from "../CoinPage/CoinPageContainer";

import './App.css';



const App = () => {

    const [crypto, setCrypto] = useState('bitcoin');

    const getCrypto = (id) => {
        setCrypto(id);
    }

    return (
        <>
            <Header/>
            <div className="container">
                <Switch>
                    <Route exact path="/"
                           render={() => <PopularContainer getCrypto={getCrypto} />}
                    />
                    <Route exact path="/all"
                           render={() => <AllPopularContainer/>}
                    />
                    <Route exact path="/chart"
                           render={() => <CoinPageContainer crypto={crypto} />}
                    />
                </Switch>

            </div>
        </>
    );
}

export default App;
