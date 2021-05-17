import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { allCatsContext } from "../../context/allCatsContext";

export const Pagination = () => {
  const { allCats } = useContext(allCatsContext);
  const [pagination, setPagination] = useState(0);
  const isMonted = useRef(false);

  useEffect(() => {
    if(!isMonted.current){
      setTimeout(() => {
        if (pagination < 64) {
          setPagination(pagination + 4);
        } else {
          setPagination(0);
        }
      }, 15000);
    }
    return () => {
      isMonted.current = true;
    };
  }, [pagination]);

  return (
    <div className="home__card-container">
      {allCats.length > 0 ? (
        allCats.slice(pagination, pagination + 4).map((cat) => {
          return (
            <Link
              key={cat.id}
              to={`/breed/${cat.id}`}
              className="card animate__animated animate__fadeInLeft"
            >
              <img
                src={cat?.image?.url}
                className="card-img-top card animate__animated animate__fadeIn"
                alt={`img of cat ${cat.name}`}
              />
              <div className="card-body">
                <p className="card-text">{cat.name}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};
