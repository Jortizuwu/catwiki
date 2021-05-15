import React, { useCallback, useEffect, useState } from "react";
import { allCatsByApi } from "./api/getInfoByApi";
import { allCatsContext } from "./context/allCatsContext";
import { resolutionContext } from "./context/resolutionContext";
import { AppRouter } from "./Routers/AppRouter";

export const CatWiki = () => {
  const [allCats, setAllCats] = useState([]);
  const [resolution, setResolution] = useState(0);

  const getData = useCallback( async () => {
    const data = await allCatsByApi();
    setAllCats(data);
  },[]);

  useEffect(() => {
    const getResolution = () => {
      setResolution(window.outerWidth);
    }
    getResolution();
  }, [])

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <allCatsContext.Provider value={{ allCats }}>
        <resolutionContext.Provider value={{resolution}}>
          <AppRouter />
        </resolutionContext.Provider>
      </allCatsContext.Provider>
    </>
  );
};
