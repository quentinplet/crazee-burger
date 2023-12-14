import { createContext } from "react";

export default createContext({
  isModeAdmin: true,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddSelected: true,
  setIsAddSelected: () => {},

  isEditSelected: false,
  setIsEditSelected: () => {},
});
