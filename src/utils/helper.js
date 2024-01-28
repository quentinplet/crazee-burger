import { findArrayElementById } from "./array";

export const calculateSumToPay = (basket, menu) => {
  return basket.reduce((acc, product) => {
    const menuProduct = findArrayElementById(menu, product.id);
    if (isNaN(menuProduct.price)) return acc;
    return menuProduct.price * product.quantity + acc;
  }, 0);
};

export const checkIfProductIsSelected = (idProduct, idProductClickedOn) => {
  return idProduct === idProductClickedOn;
};
