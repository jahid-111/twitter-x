"use client";
import { createContext, useState } from "react";

export const ToggleContext = createContext();

const ToggleContextProvider = ({ children }) => {
  const [load, setLoad] = useState("For You");

  // Pass Toggle Data : User toggle top (follow, trend, entertainment) render conditionally On Main Children
  return (
    <ToggleContext.Provider value={{ load, setLoad }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
