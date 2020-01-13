import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "pages/HomePage";
import ShopPage from "pages/ShopPage";
import Header from "components/Header";
import AuthPage from "pages/AuthPage";

import { useAuthUser } from "hooks/useAuthFirebase";

function App() {
  const currentUser = useAuthUser();

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/auth"
          render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
        />
      </Switch>
    </div>
  );
}

export default App;
