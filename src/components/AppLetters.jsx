import React from "react";
import { useSearched } from "../hooks/useSearched";
import { Error } from "./Error";
import { Formulary } from "./Formulary";
import { Lirycs } from "./Lirycs";
import { Spinner } from "./Spinner";

export const AppLetters = () => {
  const { error, lirycs, loading } = useSearched();

  return (
    <>
      <header>Busqueda de letras de Canciones</header>
      <Formulary />
      <main>
        {error ? (
          <Error>Coloque nombre y cancion</Error>
        ) : lirycs ? (
          <Lirycs />
        ) : loading ? (
          <Spinner />
        ) : (
          <p className="text-center">Busca letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};
