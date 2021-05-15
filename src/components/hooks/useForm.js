import { useState } from "react";

export const useForm = (ini = {}) => {
  const [values, setValues] = useState(ini);
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  return [values, handleInputChange];
};
