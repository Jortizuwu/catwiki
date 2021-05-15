import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/CatwikiLogo.svg";
import { allCatsContext } from "../../context/allCatsContext";

export const Search = () => {
  const { allCats } = useContext(allCatsContext);
  const [allNames, setAllNames] = useState([]);
  const [posiblesNameSearch, setPosiblesNameSearch] = useState(null);
  const [show, setShow] = useState(false);

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
    if (target.value.trim().length > 0) {
      const values = allNames.filter((val) =>
        val[0].toLocaleLowerCase().includes(target.value.toLocaleLowerCase())
      );
      setPosiblesNameSearch(values);
      if (values.length > 0) {
        setShow(true);
      }
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
          {posiblesNameSearch && posiblesNameSearch.length > 0 ? (
            <div className="home__list mt-2" style={{ width: "270px" }}>
              {posiblesNameSearch.map((id) => (
                <Link to={`breed/${id[1]}`}className="list" key={id}>
                  {id[0]}
                </Link>
              ))}
            </div>
          ) : (
            show && <p className="">0 econtrados</p>
          )}
        </div>
      </div>
    </div>
  );
};
