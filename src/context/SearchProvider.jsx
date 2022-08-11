import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [dataForm, setDataForm] = useState({
    artist: "",
    music: "",
  });

  const handleChangeData = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };

  return (
    <SearchContext.Provider value={{ dataForm, handleChangeData }}>
      {children}
    </SearchContext.Provider>
  );
};
