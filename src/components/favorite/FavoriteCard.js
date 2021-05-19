import React from 'react'
import { Link } from 'react-router-dom'

export const FavoriteCard = ({cat, idx, handleDeleteCatFavoriteCard}) => {
    return (
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
    )
}
