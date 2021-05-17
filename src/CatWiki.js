import React, { useEffect, useRef, useState } from "react";
import { allCatsByApi } from "./api/getInfoByApi";
import { allCatsContext } from "./context/allCatsContext";
import { favoriteContext } from "./context/favoriteContext";
import { resolutionContext } from "./context/resolutionContext";
import { AppRouter } from "./Routers/AppRouter";

export const CatWiki = () => {
  const [allCats, setAllCats] = useState([]);
  const [resolution, setResolution] = useState(0);
  const [listCatsFavorite, setListCatsFavorite] = useState([]);
  const isMounted = useRef(true);

  const addCatFavoriteList = (cat) => {
    const uwu = [cat].map((a) =>{
      return a.breeds[0].id
    })
    const ids = listCatsFavorite.map((c) => {
      return c.breeds[0].id
    })
    
    console.log(ids);
    const cd = ids.includes(uwu);
    console.log(cd)
    if (!ids.includes(uwu)) {
      setListCatsFavorite([...listCatsFavorite, cat]);
    } else {
      const newArr = listCatsFavorite.filter((cati) => cati.breeds[0].id !== cat.breeds[0].id);
      setListCatsFavorite(newArr);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      const getResolution = () => {
        setResolution(window.outerWidth);
      };
      getResolution();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

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
      <resolutionContext.Provider value={{ resolution }}>
        <favoriteContext.Provider
          value={{ addCatFavoriteList, setListCatsFavorite, listCatsFavorite }}
        >
          <AppRouter />
        </favoriteContext.Provider>
      </resolutionContext.Provider>
    </allCatsContext.Provider>
  );
};
