import React from "react";

export const CatResolution = ({ info, handleGoback }) => {
  const style = {
    backgroundImage: `url(${info?.url})`,
    height: "400px",
    width: "100%",
    borderRadius: "15px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div
        className="cat__background animate__animated animate__fadeIn"
        style={style}
      >
        <div className="d-flex justify-content-between">
          <button
            onClick={handleGoback}
            className="cat__back"
            style={{ background: "white" }}
          >
            <span
              className="material-icons"
              style={{ color: "black", fontSize: "1rem" }}
            >
              chevron_left
            </span>
          </button>
          <button
            onClick={handleGoback}
            className="cat__back"
            style={{ background: "#fff" }}
          >
            <span
              className="material-icons"
              style={{ color: "red", fontSize: "1rem" }}
            >
              favorite
            </span>
          </button>
        </div>
        <p className="cat__origin">{info.breeds[0]?.origin}</p>
      </div>
    </div>
  );
};
