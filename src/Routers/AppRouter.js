import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { CatScreen } from "../components/Cat/CatScreen";
import { Favorite } from "../components/favorite/Favorite";
import { Footer } from "../components/Footer";
import { HomeScreen } from "../components/Home/HomeScreen";
import { NavLogo } from "../components/NavLogo";

export const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <NavLogo />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/favorites" component={Favorite} />
          <Route exact path="/breed/:id" component={CatScreen} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
