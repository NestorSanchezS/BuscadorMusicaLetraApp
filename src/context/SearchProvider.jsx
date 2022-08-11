import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [dataForm, setDataForm] = useState({
    artist: "",
    music: "",
  });
  const [error, setError] = useState(false);

  const handleChangeData = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };

  const letterSearch = () => {
    console.log("searched...");
  };
  return (
    <SearchContext.Provider
      value={{ dataForm, handleChangeData, error, setError, letterSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
