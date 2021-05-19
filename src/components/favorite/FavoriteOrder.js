import React, { useEffect } from "react";

export const FavoriteOrder = ({ listCatsFavorite }) => {

  // const names = ["jose","juli","ana"];
  // console.log(names.sort())

  const ordenarByName = () =>{
    const names = listCatsFavorite.map((name) => {
      return name.breeds[0].name
    })
    const order = names.sort();
    const newArr = listCatsFavorite.filter((cat) => order.includes(cat.breeds[0].name))
    // console.log(order);
    // console.log(newArr)
    return names.sort();
  }
  // const data = ordenarByName();
  // console.log(data)
  // useEffect(() => {
  //   ordenarByName(); 
  // }, [])

  return (
    <select name="cars" className="form-select">
      <option value="volvo">name</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
};
