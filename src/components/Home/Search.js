import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/CatwikiLogo2.svg";
import { allCatsContext } from "../../context/allCatsContext";

export const Search = () => {
  const { allCats } = useContext(allCatsContext);
  const [allNames, setAllNames] = useState([]);
  const [posiblesNameSearch, setPosiblesNameSearch] = useState(null);
  const [showExist, setShowExist] = useState(false);
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const catName = () => {
      const names = allCats.map((cat) => {
        return [cat.name, cat.id];
      });
      setAllNames(names);
    };
    catName();
  }, [allCats]);
  const handleSearchCat = (event) => {
    const { target } = event;
    setName(target.value);
    if (target.value.trim().length > 0) {
      const values = allNames.filter((val) =>
        val[0].toLocaleLowerCase().includes(target.value.toLocaleLowerCase())
      );
      setPosiblesNameSearch(values);
      values.length > 0 && setShowExist(true);
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="home__search mt-4">
      <div className="home__info">
        <div>
          <img src={logo} alt="logo" style={{ fill: "#fff" }} />
          <p style={{ width: "250px" }}>
            Get to know more about your
            <br />
            cat breed
          </p>
          <div
            className="home__input-container mt-4"
            style={{ width: "270px" }}
          >
            <input
              onChange={handleSearchCat}
              type="search"
              placeholder="Enter your breed"
              autoCapitalize="off"
            />
            <span className="material-icons search">search</span>
          </div>
          {posiblesNameSearch && posiblesNameSearch.length > 0
            ? show && (
                <div className="home__list mt-2" style={{ width: "270px" }}>
                  {posiblesNameSearch.map((id) => (
                    <Link to={`breed/${id[1]}`} className="list" key={id}>
                      {id[0]}
                    </Link>
                  ))}
                </div>
              )
            : showExist && (
                <p className="home__no-encontrado">
                  the breed {name} does not exist
                </p>
              )}
          {(name.includes("juli") || name.includes("Juli")) && (
            <div className="home__list juli mt-2" style={{ color: "black" }}>
              <p className="text-center">
                Nya Hello Juli uwu <br />
                from: me<br/>
                to: you
              </p>
              <a
                // ref="noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=D42jooB9ghk"
              >
                Jose Jose - El triste
                <span className=" material-icons">
                  <span class="material-icons">play_circle_outline</span>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
