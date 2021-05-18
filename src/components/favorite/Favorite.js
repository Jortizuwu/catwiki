import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { favoriteContext } from "../../context/favoriteContext";
import PacmanLoader from "react-spinners/PacmanLoader";

export const Favorite = ({ history }) => {
  const { setListCatsFavorite, listCatsFavorite } = useContext(favoriteContext);
  const handleGoback = () => {
    history.goBack();
  };

  const handleDeleteCatFavoriteCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newArr = listCatsFavorite.filter(
      (val) => val.breeds[0].id !== e.target.value
    );
    setListCatsFavorite(newArr);
  };

  return (
    <div className="home__page">
      <button onClick={handleGoback} className="btn btn-back material-icons">
        arrow_back
      </button>
      <h1 className="favorite__title mt-3" style={{ color: "#291507" }}>
        Favorite list
      </h1>
      <div>
        {listCatsFavorite.length > 0 ? (
          <div>
            {listCatsFavorite.map((cat, idx) => (
              <Link
                to={`/breed/${cat.breeds[0].id}`}
                key={cat.id}
                className="d-flex favorite__card mb-3"
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 favorite__img-conatiner">
                    <img src={cat.url} className="favorite__img" />
                  </div>
                  <div className="favorite__card-body d-flex">
                    <div className="">
                      <h3 className="favorite__title">
                        {idx + 1}. {cat.breeds[0]?.name}{" "}
                      </h3>
                      <p className="mt-2 favorite__description">
                        {cat.breeds[0]?.description}
                      </p>
                    </div>
                    <button
                      value={cat.breeds[0].id}
                      onClick={handleDeleteCatFavoriteCard}
                      className="favorite__delete material-icons"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center mt-5 list__empty">
            <p className="mb-4">the list is empty, please add one or more kittens uwu</p>
            <PacmanLoader color={"#36D7B7"} loading={true} size={30} />
          </div>
        )}
      </div>
    </div>
  );
};
