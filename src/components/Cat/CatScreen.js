import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

import { allCatsByBreedName } from "../../api/getInfoByApi";
import { CatResolution } from "./CatResolution";
import { CatPresentation } from "./CatPresentation";
import { favoriteContext } from "../../context/favoriteContext";

export const CatScreen = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const { addCatFavoriteList } = useContext(favoriteContext);
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const isMonted = useRef(true);

  useEffect(() => {
    if (isMonted.current) {
      const dataByCat = async () => {
        const data = await allCatsByBreedName(id);
        setCat(data);
        setLoading(false);
      };
      dataByCat();
    }
    return () => {
      isMonted.current = false;
    };
  }, [id]);

  const addCatId = () => {
    const [data] = cat;
    addCatFavoriteList(data);
  };

  const handleGoback = () => {
    history.goBack();
  };

  return (
    <main className=" home__page">
      {cat ? (
        cat.map((info) => {
          return (
            <div className="cat__container mt-2" key={info.id}>
              <CatResolution
                info={info}
                handleGoback={handleGoback}
                addCatId={addCatId}
              />
              <div className="cat__banner animate__animated animate__fadeIn cat__display2">
                <button
                  onClick={handleGoback}
                  className="btn btn-back material-icons"
                >
                  arrow_back
                </button>
                <div className="cat__img mt-2">
                  <img src={info?.url} alt={`breed ${id}`} />
                </div>
              </div>
              <CatPresentation info={info} addCatId={addCatId} />
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
