import React from "react";
import { useSearched } from "../hooks/useSearched";

export const Lirycs = () => {
  const { lirycs } = useSearched();
  return <div className="letra">{lirycs}</div>;
};
