import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

import { allCatsByBreedName } from "../../api/getInfoByApi";
import { resolutionContext } from "../../context/resolutionContext";
import { CatResolution } from "./CatResolution";
import { CatPresentation } from "./CatPresentation";

export const CatScreen = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const { resolution } = useContext(resolutionContext);
  const { id } = useParams();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    const dataByCat = async () => {
      const data = await allCatsByBreedName(id);
      setCat(data);
      setLoading(false);
    };
    dataByCat();
  }, [id]);

  const handleGoback = () => {
    history.goBack();
  };

  return (
    <main className=" home__page">
      {cat ? (
        cat.map((info) => {
          return (
            <div
              className={resolution > 575 ? "cat__container mt-2" : ""}
              key={info.id}
            >
              {resolution < 450 ? (
                <CatResolution info={info} handleGoback={handleGoback} />
              ) : (
                <div className="cat__banner animate__animated animate__fadeIn">
                  <button onClick={handleGoback} className="cat__back">
                    <span className="material-icons">arrow_back</span>
                  </button>
                  <div className="cat__img">
                    <img src={info?.url} alt={`breed ${id}`} />
                  </div>
                </div>
              )}
              <CatPresentation info={info} />
              <div>other</div>
            </div>
          );
        })
      ) : (
        <div className="loading__page home__page">
          <HashLoader color={"36D7B7"} loading={loading} size={50} />
        </div>
      )}
    </main>
  );
};
