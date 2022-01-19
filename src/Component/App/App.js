import {Route, Switch} from "react-router-dom";

import Header from "../Header/Header";
import PopularContainer from "../Popular/PopularContainer";
import AllCryptoContainer from "../Popular/AllCryptoContainer";

import './App.css';
import CoinPage from "../CoinPage/CoinPage";



const App = () => {
  return (
      <>
          <Header />
           <div className="container">
                {/*<Switch>*/}
                {/*    <Route exact path="/"*/}
                {/*           render={() => <PopularContainer /> }*/}
                {/*    />*/}
                {/*    <Route exact path="/all"*/}
                {/*        render={() => <AllCryptoContainer />}*/}
                {/*    />*/}
                {/*</Switch>*/}
               <CoinPage />
           </div>
      </>
  );
}

export default App;
