import React from "react";

export const Formulary = () => {
  return (
    <form>
      <legend>Busca por Artista y Cancion</legend>
      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input type="text" name="artist" placeholder="Nombre Artista" />
        </div>
      </div>
    </form>
  );
};
