import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allCatsContext } from "../../context/allCatsContext";

export const SeeMore = () => {
  const { allCats } = useContext(allCatsContext);
  return (
    <div className="home__more ">
      <div className="home__allinfo mt-3">
        <h4>Most Searched Breeds</h4>
        <div className="home__see-more mb-4">
          <h2 className="">66+ Breeds For you to discover</h2>
          <Link to="/" className="more-see">
            <p>see more</p>
            <span className="material-icons arrow">arrow_right</span>
          </Link>
        </div>
        <div className="home__card-container">
          {allCats.length > 0 ? (
            allCats.slice(18, 22).map((cat) => {
              return (
                <Link key={cat.id} to={`/breed/${cat.id}`} className="card">
                  <img
                    src={cat?.image?.url}
                    className="card-img-top"
                    alt={`img of cat ${cat.name}`}
                  />
                  <div className="card-body">
                    <p className="card-text">{cat.name}</p>
                  </div>
                </Link>
              );
            })
          ) : (
            <div
              className="d-flex justify-content-center"
              style={{ margin: "auto 0px" }}
            >
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
