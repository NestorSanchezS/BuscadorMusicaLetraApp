import React from "react";
import { AppLetters } from "./components/AppLetters";
import { SearchProvider } from "./context/SearchProvider";

export const App = () => {
  return (
    <SearchProvider>
      <AppLetters />
    </SearchProvider>
  );
};
