import React from "react";
import { useSearched } from "../hooks/useSearched";
import { Error } from "./Error";
import { Formulary } from "./Formulary";

export const AppLetters = () => {
  const { error } = useSearched();

  console.log(error);
  return (
    <>
      <header>Busqueda de letras de Canciones</header>
      <Formulary />
      <main>{error && <Error>Coloque nombre y cancion</Error>}</main>
    </>
  );
};
