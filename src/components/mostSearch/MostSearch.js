import React, { useContext } from "react";
import { allCatsContext } from "../../context/allCatsContext";
import { MostCard } from "./MostCard";

export const MostSearch = ({ history }) => {
  const { allCats } = useContext(allCatsContext);
  console.log(allCats);

  const handleGoback = () => {
    history.goBack();
  };

  return (
    <div className="home__page animate__animated animate__fadeIn">
      <button onClick={handleGoback} className="btn btn-back material-icons">
        arrow_back
      </button>
      <div className="d-flex justify-content-between">
        <h1 className="favorite__title mt-3" style={{ color: "#291507" }}>
          top 10 most searched breeds
        </h1>
      </div>
      {allCats.length > 0 &&
        allCats.slice(36,46).map((cat, idx) => (
            <MostCard cat={cat} idx={idx} key={cat.id}/>
        ))
      }
    </div>
  );
};
