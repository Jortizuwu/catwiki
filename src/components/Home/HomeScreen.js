import React from "react";
import { InfoPage } from "./InfoPage";
import { Search } from "./Search";
import { SeeMore } from "./SeeMore";

export const HomeScreen = () => {
  window.scroll(0, 0);
  return (
    <div className="uwu animate__animated animate__fadeIn">
      <Search />
      <SeeMore />
      <InfoPage />
    </div>
  );
};
