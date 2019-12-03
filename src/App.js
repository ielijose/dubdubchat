import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Logo } from "./components/Logo";
import { ChatPage } from "./pages/Chat";
import { HomePage } from "./pages/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Logo />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/chat" component={ChatPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
