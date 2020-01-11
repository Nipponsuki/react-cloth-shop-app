import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";
import ShopPage from "pages/ShopPage";
import Header from "components/Header";
import AuthPage from "pages/AuthPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
