import React, { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";

const useToggleLoad = () => {
  return useContext(ToggleContext);
};

export default useToggleLoad;
