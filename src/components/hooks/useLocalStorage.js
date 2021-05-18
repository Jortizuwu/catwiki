import { useState } from "react";

export const useLocalStorage = (key, inital) => {
  const [storageValues, setStorageValues] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : inital;
    } catch (error) {
      return inital;
    }
  });
  const setValues = (values) => {
    try {
      setStorageValues(values);
      localStorage.setItem(key, JSON.stringify(values));
    } catch (error) {}
  };
  return [storageValues, setValues];
};
