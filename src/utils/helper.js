import { findArrayElementById } from "./array";
import { replaceFrenchCommaWithDot } from "./maths";

export const calculateSumToPay = (basket, menu) => {
  if (!menu) return;
  return basket.reduce((acc, product) => {
    const menuProduct = findArrayElementById(menu, product.id);
    if (typeof menuProduct.price === "number")
      return menuProduct.price * product.quantity + acc;
    if (checkIfStringPriceIsCorrect(menuProduct.price)) {
      const price = replaceFrenchCommaWithDot(menuProduct.price);
      return price * product.quantity + acc;
    }
    return acc;
  }, 0);
};

export const checkIfProductIsSelected = (idProduct, idProductClickedOn) => {
  return idProduct === idProductClickedOn;
};

export const checkIfStringPriceIsCorrect = (price) => {
  if (price.typeof === "number" || checkStringPrice(price)) {
    return price;
  }
  if (price.match(/^[+-]?(\d+([.,]\d+)?)[.,]?$/)) {
    return price;
  }
  return false;
};

export const checkStringPrice = (price) => {
  const regex = /^[+-]?\d+(?:[.,]\d+)?$/;
  return regex.test(price);
};
