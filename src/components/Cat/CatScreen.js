import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allCatsByBreedName } from "../../api/getInfoByApi";
import { Raiting } from "./Raiting";

export const CatScreen = ({ history }) => {
  const { id } = useParams();
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const dataByCat = async () => {
      const data = await allCatsByBreedName(id);
      setCat(data);
    };
    dataByCat();
  }, [id]);
  const handleGoback = () => {
    history.goBack();
  };
  window.scroll(0, 0);
  return (
    <div>
      <button onClick={handleGoback} className="cat__back">
        <span className="material-icons">chevron_left</span>
      </button>
      {cat &&
        cat.map((info) => {
          return (
            <div className="cat__container mt-2" key={info.id}>
              <div className="cat__presentation">
                <div className="cat__img">
                  <img src={info?.url} alt={`breed ${id}`} />
                </div>
                <div className="cat__all-info">
                  <h5>{info.breeds[0]?.name}</h5>
                  <p>{info.breeds[0]?.description}</p>
                  <div className="rating__a">
                    <p className="hola">
                      temperament: {info.breeds[0]?.temperament}
                    </p>
                    <p>origin: {info.breeds[0]?.origin}</p>
                    <p>life span: {info.breeds[0]?.life_span}</p>
                    <Raiting cat={info} />
                  </div>
                </div>
              </div>
              <div>
                <h5>Other photos</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};
