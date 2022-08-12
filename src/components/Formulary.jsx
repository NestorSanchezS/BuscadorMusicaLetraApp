import React from "react";
import { useSearched } from "../hooks/useSearched";

export const Formulary = () => {
  const { dataForm, handleChangeData, setError, letterSearch } = useSearched();

  const handleSubmitData = (e) => {
    e.preventDefault();
    if (Object.values(dataForm).includes("")) {
      setError(true);
      return;
    }
    setError(false);

    letterSearch(dataForm);
  };
  return (
    <form onSubmit={handleSubmitData}>
      <legend>Busca por Artista y Cancion</legend>
      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Nombre Artista"
            value={dataForm.artista}
            onChange={({ target }) => handleChangeData({ target })}
          />
        </div>
        <div>
          <label>Cancion</label>
          <input
            type="text"
            name="cancion"
            placeholder="Nombre cancion"
            value={dataForm.cancion}
            onChange={({ target }) => handleChangeData({ target })}
          />
        </div>
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};
