import { useContext } from "react";
import { SearchContext } from "../context/SearchProvider";

export const useSearched = () => {
  return useContext(SearchContext);
};
