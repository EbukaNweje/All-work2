import React from "react";
import HeaderNav from "./component/HeaderNav";
import HomeScreen from "./component/HomeScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UpTest from "./component/UpTest";
import Footer from "./component/Footer";
import Detailed from "./component/Detailed";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderNav />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/detail/:id" exact component={Detailed} />
          <Route path="/Hello Test" exact component={Detailed} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
