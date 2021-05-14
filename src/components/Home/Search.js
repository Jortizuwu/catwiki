import React from "react";
import logo from "../../assets/img/CatwikiLogo.svg";

export const Search = () => {
  return (
    <div className="home__search mt-4">
      <div className="home__info">
        <div>
          <img src={logo} alt="logo" style={{ fill: "#fff" }} />
          <p style={{width:"250px"}}>
            Get to know more about your
            <br />
            cat breed
          </p>
          <div className="home__input-container mt-4" style={{width: "270px"}}>
            <input placeholder="Enter your breed" />
            <span className="material-icons search">search</span>
          </div>
        </div>
      </div>
    </div>
  );
};
