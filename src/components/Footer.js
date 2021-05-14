import React from "react";
import logo from "../assets/img/CatwikiLogo.svg";

export const Footer = () => {
  return (
    <footer className="home__footer mt-5">
      <div className="home__footer-info">
        <img src={logo} alt="logo" />
        <p>create by jojouwu</p>
      </div>
    </footer>
  );
};
