import React, { useContext } from "react";
import { favoriteContext } from "../../context/favoriteContext";
import PacmanLoader from "react-spinners/PacmanLoader";
import { FavoriteCard } from "./FavoriteCard";
// import { FavoriteOrder } from "./FavoriteOrder";

export const Favorite = ({ history }) => {
  const { handleLocalStorage, listCatsFavorite } = useContext(favoriteContext);
  const handleGoback = () => {
    history.goBack();
  };

  const handleDeleteCatFavoriteCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newArr = listCatsFavorite.filter(
      (val) => val.breeds[0].id !== e.target.value
    );
    handleLocalStorage(newArr);
  };

  return (
    <div className="home__page animate__animated animate__fadeIn">
      <button onClick={handleGoback} className="btn btn-back material-icons">
        arrow_back
      </button>
      <div className="d-flex justify-content-between">
        <h1 className="favorite__title mt-3" style={{ color: "#291507" }}>
          Favorite list
        </h1>
        {/* <FavoriteOrder listCatsFavorite={listCatsFavorite}/> */}
      </div>
      <div>
        {listCatsFavorite &&
          (listCatsFavorite.length > 0 ? (
            <div>
              {listCatsFavorite.map((cat, idx) => (
                <FavoriteCard
                  cat={cat}
                  idx={idx}
                  handleDeleteCatFavoriteCard={handleDeleteCatFavoriteCard}
                  key={cat.id}
                />
              ))}
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center mt-5 list__empty">
              <p className="mb-4">
                the list is empty, please add one or more kittens uwu
              </p>
              <PacmanLoader color={"#36D7B7"} loading={true} size={30} />
            </div>
          ))}
      </div>
    </div>
  );
};
