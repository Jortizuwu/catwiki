import React from "react";
import { Raiting } from "./Raiting";

export const CatPresentation = ({ info, addCatId }) => {
  return (
    <div className="cat__presentation animate__animated animate__fadeIn">
      <div className="cat__all-info">
        <div className="d-flex justify-content-between">
          <h5>{info.breeds[0]?.name}</h5>
          <button
            onClick={addCatId}
            className="btn btn-favorite material-icons cat__display2"
          >
            favorite
          </button>
        </div>
        <p>{info.breeds[0]?.description}</p>
        <div className="rating__a">
          <p className="hola">
            temperament: <span>{info.breeds[0]?.temperament}</span>
          </p>
          <p className="hola">
            origin:
            <span> {info.breeds[0]?.origin}</span>
          </p>
          <p className="hola">
            life span: <span>{info.breeds[0]?.life_span}</span>
          </p>
          <Raiting cat={info} />
        </div>
      </div>
    </div>
  );
};
