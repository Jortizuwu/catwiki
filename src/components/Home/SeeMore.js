import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import { Pagination } from "./Pagination";

const showNames = [
  "Chantilly",
  4000,
  "Javanese",
  4000,
  "Abyssinian",
  4000,
  "Burmilla",
  4000,
  "Bombay",
  4000
];
export const SeeMore = () => {
  return (
    <main className="home__more ">
      <div className="home__allinfo mt-3">
        <h4>Most Searched Breeds</h4>
        <div className="home__see-more mb-4">
          <h2 className="home__see-breeds">
            66+ Breeds For you to discover as
            <Typical steps={showNames} loop={Infinity} wrapper="p" />
          </h2>
          <Link to="/most" className="more-see">
            <p>see more</p>
            <span className="material-icons arrow">arrow_right</span>
          </Link>
        </div>
        <Pagination/>
      </div>
    </main>
  );
};
