import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allCatsByBreedName } from "../../api/getInfoByApi";
import { resolutionContext } from "../../context/resolutionContext";
import { Raiting } from "./Raiting";

export const CatScreen = ({ history }) => {
  const { resolution } = useContext(resolutionContext);
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

  return (
    <main>
      {cat &&
        cat.map((info) => {
          return (
            <div
              className={resolution > 575 ? "cat__container mt-2" : ""}
              key={info.id}
            >
              {resolution < 450 ? (
                <div>
                  <div
                    className="cat__background"
                    style={{
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
                    }}
                  >
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
                    <p className="cat__origin">{info.breeds[0]?.origin}</p>
                  </div>
                </div>
              ) : (
                <div className="cat__banner">
                  <button onClick={handleGoback} className="cat__back">
                    <span className="material-icons">chevron_left</span>
                  </button>
                  <div className="cat__img">
                    <img src={info?.url} alt={`breed ${id}`} />
                  </div>
                </div>
              )}
              <div className="cat__presentation">
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
              <div>other</div>
            </div>
          );
        })}
    </main>
  );
};
