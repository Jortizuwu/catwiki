import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { favoriteContext } from "../../context/favoriteContext";

export const Favorite = ({ history }) => {
  const { setListCatsFavorite, listCatsFavorite } = useContext(favoriteContext);

  const handleGoback = () => {
    history.goBack();
  };

  const handleDeleteCatFavoriteCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newArr = listCatsFavorite.filter(val => val.breeds[0].id !== e.target.value);
    setListCatsFavorite(newArr);
  }

  return (
    <div className="home__page">
      <button onClick={handleGoback} className="cat__back">
        <span className="material-icons">arrow_back</span>
      </button>
      <h1>Favorite list</h1>
      <div>
        {listCatsFavorite.length > 0 ? (
          <div>
            {listCatsFavorite.map((cat, idx) => (
              <Link to={`/breed/${cat.breeds[0].id}`} key={cat.id} className="d-flex favorite__card mb-3">
                <div className="d-flex fav__card-conta">
                  <div className="flex-shrink-0 favorite__img-conatiner">
                    <img src={cat.url} className="favorite__img" />
                  </div>
                  <div className="favorite__card-body d-flex">
                    <div className="">
                      <h3 className="favorite__title">
                        {idx + 1}. {cat.breeds[0]?.name}{" "}
                      </h3>
                      <p className="mt-2 favorite__description">{cat.breeds[0]?.description}</p>
                    </div>
                  <button value={cat.breeds[0].id} onClick={handleDeleteCatFavoriteCard} className="favorite__delete material-icons">
                    delete
                  </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div>vacia como los sentimientos de ella hacia ti</div>
        )}
      </div>
    </div>
  );
};
