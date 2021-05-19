import React from "react";
import { Link } from "react-router-dom";

export const InfoPage = () => {
  return (
    <div className="home__info-info mt-5">
      <div className="home__info-more">
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <Link to="/most" className="more-see">
          <p className="">read more</p>
          <span className="material-icons arrow">arrow_right</span>
        </Link>
      </div>
      <div className="home__info-gallery">
        <img className="img1" src="https://i.imgur.com/3zn6ruX.png" alt="img cat" />
        <img className="img2" src="https://i.imgur.com/erbeAT5.png" alt="img cat" />
        <img className="img3" src="https://i.imgur.com/5GxYg70.png" alt="img cat" />
      </div>
    </div>
  );
};
