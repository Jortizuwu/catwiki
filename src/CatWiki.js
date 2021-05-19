import React, { useEffect, useRef, useState } from "react";
import { allCatsByApi } from "./api/getInfoByApi";
import { allCatsContext } from "./context/allCatsContext";
import { favoriteContext } from "./context/favoriteContext";
import { AppRouter } from "./Routers/AppRouter";


export const CatWiki = () => {
  const [allCats, setAllCats] = useState([]);
  const [listCatsFavorite, setListCatsFavorite] = useState(JSON.parse(localStorage.getItem("cats")) || []);
  const isMounted = useRef(true);
  const handleLocalStorage = (vale) => {
    try {
      setListCatsFavorite(vale);
      localStorage.setItem("cats", JSON.stringify(vale));
    } catch (error) {}
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("cats"))
  },[])

  const addCatFavoriteList = (cat) => {
    const uwu = [cat].map((a) => {
      return a.breeds[0].id;
    });
    const ids = listCatsFavorite.map((c) => {
      return c.breeds[0].id;
    });
    const cd = ids.find((a) => a.includes(uwu));
    if (cd === undefined) {
      handleLocalStorage([...listCatsFavorite, cat]);
    } else {
      const newArr = listCatsFavorite.filter(
        (cati) => cati.breeds[0].id !== cat.breeds[0].id
      );
      handleLocalStorage(newArr);
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
        value={{ addCatFavoriteList, handleLocalStorage, listCatsFavorite }}
      >
        <AppRouter />
      </favoriteContext.Provider>
    </allCatsContext.Provider>
  );
};
