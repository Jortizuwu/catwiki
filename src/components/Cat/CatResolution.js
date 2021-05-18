import React from "react";

export const CatResolution = ({ info, handleGoback, addCatId }) => {
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
    <div className="animate__animated animate__fadeIn cat__display">
      <div
        className="cat__background animate__animated animate__fadeIn"
        style={style}
      >
        <div className="d-flex justify-content-between">
          <button
            onClick={handleGoback}
            className="btn btn-back material-icons"
          >
            chevron_left
          </button>
          <button
            onClick={addCatId}
            value={info?.id}
            className="btn btn-favorite material-icons"
          >
            favorite
          </button>
        </div>
        <p className="cat__origin">{info.breeds[0]?.origin}</p>
      </div>
    </div>
  );
};
