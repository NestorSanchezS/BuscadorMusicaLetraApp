import React from "react";
import { useState } from "react";

export const Formulary = () => {
  const [dataForm, setDataForm] = useState({
    artist: "",
    music: "",
  });
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
            onChange={({ target }) => setDataForm(target.value)}
          />
        </div>
        <div>
          <label>Cancion</label>
          <input
            type="text"
            name="music"
            placeholder="Nombre cancion"
            value={dataForm.music}
            onChange={({ target }) => setDataForm(target.value)}
          />
        </div>
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};
