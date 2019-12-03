import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Logo } from "./components/Logo";
import { ChatPage } from "./pages/Chat";
import { HomePage } from "./pages/Home";
import { ErrorPage } from "./pages/Error";

import store from "./store/index";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/chat" component={ChatPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Provider>
  );
};
