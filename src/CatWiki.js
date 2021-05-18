import React, { useEffect, useRef, useState } from "react";
import { allCatsByApi } from "./api/getInfoByApi";
import { allCatsContext } from "./context/allCatsContext";
import { favoriteContext } from "./context/favoriteContext";
import { AppRouter } from "./Routers/AppRouter";

export const CatWiki = () => {
  const [allCats, setAllCats] = useState([]);
  const [listCatsFavorite, setListCatsFavorite] = useState([]);
  const isMounted = useRef(true);

  const addCatFavoriteList = (cat) => {
    const uwu = [cat].map((a) => {
      return a.breeds[0].id;
    });
    const ids = listCatsFavorite.map((c) => {
      return c.breeds[0].id;
    });
    const cd = ids.find((a) => a.includes(uwu));
    if (cd === undefined) {
      setListCatsFavorite([...listCatsFavorite, cat]);
    } else {
      const newArr = listCatsFavorite.filter(
        (cati) => cati.breeds[0].id !== cat.breeds[0].id
      );
      setListCatsFavorite(newArr);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      const getData = async () => {
        const data = await allCatsByApi();
        setAllCats(data);
      };
      getData();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <allCatsContext.Provider value={{ allCats }}>
      <favoriteContext.Provider
        value={{ addCatFavoriteList, setListCatsFavorite, listCatsFavorite }}
      >
        <AppRouter />
      </favoriteContext.Provider>
    </allCatsContext.Provider>
  );
};
