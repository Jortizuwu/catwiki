import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/CatwikiLogo.svg";
import { favoriteContext } from "../context/favoriteContext";

export const NavLogo = () => {

  const {listCatsFavorite} = useContext(favoriteContext)

  return (
    <nav className="home__logo d-flex justify-content-between align-items-center">
      <Link to="/">
        <img className="mt-2" src={logo} alt="logo" />
      </Link>
      <Link to="/favorites" className="d-flex justify-content-between align-items-center nav__favorites">
        <span
          className="material-icons"
          style={{ color: "red", fontSize: "1rem" }}
        >
          favorite
        </span>
        favorite list {listCatsFavorite.length}
      </Link>
    </nav>
  );
};