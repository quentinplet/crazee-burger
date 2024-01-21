import { createContext } from "react";

export default createContext({
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  generateNewMenu: () => {},

  menu: [],
  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},

  productIsSelected: false,
  setProductIsSelected: () => {},
});
