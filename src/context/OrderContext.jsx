import { createContext } from "react";

export default createContext({
  isModeAdmin: true,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},
});
