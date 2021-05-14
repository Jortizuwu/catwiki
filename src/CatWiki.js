import React, { useCallback, useEffect, useState } from "react";
import { allCatsByApi } from "./api/getInfoByApi";
import { allCatsContext } from "./context/allCatsContext";
import { AppRouter } from "./Routers/AppRouter";

export const CatWiki = () => {
  const [allCats, setAllCats] = useState([]);

  const getData = useCallback( async () => {
    const data = await allCatsByApi();
    setAllCats(data);
  },[]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <allCatsContext.Provider value={{ allCats }}>
        <AppRouter />
      </allCatsContext.Provider>
    </div>
  );
};
