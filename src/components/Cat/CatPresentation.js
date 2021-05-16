import React from "react";
import { Raiting } from "./Raiting";

export const CatPresentation = ({ info }) => {
  return (
    <div className="cat__presentation animate__animated animate__fadeIn">
      <div className="cat__all-info">
        <h5>{info.breeds[0]?.name}</h5>
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
