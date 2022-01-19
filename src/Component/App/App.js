import {Route, Switch} from "react-router-dom";

import Header from "../Header/Header";
import PopularContainer from "../Popular/PopularContainer";
import AllCryptoContainer from "../Popular/AllCryptoContainer";

import './App.css';



const App = () => {
  return (
      <>
          <Header />
           <div className="container">
                <Switch>
                    <Route exact path="/"
                           render={() => <PopularContainer /> }
                    />
                    <Route exact path="/all"
                        render={() => <AllCryptoContainer />}
                    />
                </Switch>
           </div>
      </>
  );
}

export default App;
