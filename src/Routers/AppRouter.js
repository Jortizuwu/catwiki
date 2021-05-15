import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { CatScreen } from "../components/Cat/CatScreen";
import { Footer } from "../components/Footer";
import { HomeScreen } from "../components/Home/HomeScreen";
import { NabLogo } from "../components/NabLogo";

export const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <NabLogo />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/breed/:id" component={CatScreen} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
