import { createContext } from "react";

export default createContext({
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  generateNewMenu: () => {},

  menu: [],
});
