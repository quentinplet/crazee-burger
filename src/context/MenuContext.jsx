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
  handleEditProduct: () => {},

  titleEditRef: {},

  productAddedToBasket: {},
  setProductAddedToBasket: () => {},
  handleAddProductToBasket: () => {},
  handleDeleteProductFromBasket: () => {},
  basketProducts: [],
  isBasketEmpty: true,
});
