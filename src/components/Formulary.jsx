import React from "react";
import { useSearched } from "../hooks/useSearched";

export const Formulary = () => {
  const { dataForm, handleChangeData } = useSearched();
  return (
    <form>
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
