import React from "react";
import { Link } from "react-router-dom";

export const MostCard = ({ cat, idx }) => {
  return (
    <Link
      to={`/breed/${cat.id}`}
      key={cat.id}
      className="d-flex favorite__card mb-3"
    >
      <div className="d-flex">
        <div className="flex-shrink-0 favorite__img-conatiner">
          <img
            src={cat.image?.url}
            alt={`img cat ${cat.name}`}
            className="favorite__img"
          />
        </div>
        <div className="favorite__card-body d-flex">
          <div className="">
            <h3 className="favorite__title">
              {idx + 1}. {cat.name}{" "}
            </h3>
            <p className="mt-2 favorite__description">
              {cat.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
