import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "../components/Footer";
import { HomeScreen } from "../components/Home/HomeScreen";
import { NabLogo } from "../components/NabLogo";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NabLogo/>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};
