import React from "react";
import { InfoPage } from "./InfoPage";
import { Search } from "./Search";
import { SeeMore } from "./SeeMore";
// import { Logo } from './Logo'

export const HomeScreen = () => {
  return (
    <div className="uwu animate__animated animate__fadeIn">
      <Search />
      <SeeMore />
      <InfoPage/>
    </div>
  );
};
