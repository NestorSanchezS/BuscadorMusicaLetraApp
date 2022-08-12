import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [dataForm, setDataForm] = useState({
    artista: "",
    cancion: "",
  });
  const [error, setError] = useState(false);

  const handleChangeData = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };

  const letterSearch = async (search) => {
    const { artista, cancion } = dataForm;
    try {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SearchContext.Provider
      value={{ dataForm, handleChangeData, error, setError, letterSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
