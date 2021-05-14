import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";

export const InfoPage = () => {
  return (
    <div className="home__info-info mt-5">
      <div className="home__info-more">
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <Link to="/" className="more-see">
          <p className="">read more</p>
          <span className="material-icons arrow">arrow_right</span>
        </Link>
      </div>
      <div className="home__info-gallery">
        <img className="img1" src={image2} alt="img cat" />
        <img className="img2" src={image1} alt="img cat" />
        <img className="img3" src={image3} alt="img cat" />
      </div>
    </div>
  );
};
