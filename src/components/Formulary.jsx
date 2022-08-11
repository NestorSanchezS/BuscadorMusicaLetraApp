import React from "react";
import { useSearched } from "../hooks/useSearched";
import { Error } from "./Error";

export const Formulary = () => {
  const { dataForm, handleChangeData, error, setError } = useSearched();

  const handleSubmitData = (e) => {
    e.preventDefault();
    if (Object.values(dataForm).includes("")) {
      setError(true);
      return;
    }
    setError(false);
  };
  return (
    <form onSubmit={handleSubmitData}>
      <legend>Busca por Artista y Cancion</legend>
      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input
            type="text"
            name="artist"
            placeholder="Nombre Artista"
            value={dataForm.artist}
            onChange={({ target }) => handleChangeData({ target })}
          />
        </div>
        <div>
          <label>Cancion</label>
          <input
            type="text"
            name="music"
            placeholder="Nombre cancion"
            value={dataForm.music}
            onChange={({ target }) => handleChangeData({ target })}
          />
        </div>
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};
