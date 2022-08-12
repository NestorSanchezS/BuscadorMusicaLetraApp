import axios from "axios";
import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [dataForm, setDataForm] = useState({
    artista: "",
    cancion: "",
  });
  const [error, setError] = useState(false);
  const [lirycs, setLirycs] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeData = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };

  const letterSearch = async (search) => {
    setLoading(true);
    try {
      const { artista, cancion } = search;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const { data } = await axios.get(url);
      setLirycs(data.lyrics);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <SearchContext.Provider
      value={{
        dataForm,
        handleChangeData,
        error,
        setError,
        letterSearch,
        lirycs,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
