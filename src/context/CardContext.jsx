import { createContext } from "react";

export default createContext({
  isModeAdmin: true,
  setIsModeAdmin: () => {},

  displayEditForm: false,

  product: {},
});
