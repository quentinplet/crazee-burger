import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { filterArrayById, isEmptyArray } from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const fakeBasketTest = fakeBasket.LARGE_WEIRD;
  const [basketProducts, setBasketProducts] = useState([]);

  const isBasketEmpty = isEmptyArray(basketProducts);

  const handleAddProductToBasket = (username, productToAddToBasket) => {
    const basketProductsCopy = structuredClone(basketProducts);

    const existingProductIndex = basketProductsCopy.findIndex(
      (product) => product.id === productToAddToBasket.id
    );
    const isProductAlreadyInBasket = existingProductIndex !== -1;

    if (!isProductAlreadyInBasket) {
      createNewProductCardInBasket(
        username,
        basketProductsCopy,
        productToAddToBasket
      );
      return;
    }
    incrementProductQuantityInBasket(
      username,
      basketProductsCopy,
      existingProductIndex
    );
  };

  const handleDeleteProductFromBasket = (username, id) => {
    const basketUpdated = filterArrayById(basketProducts, id);
    setBasketProducts(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  const createNewProductCardInBasket = (
    username,
    basketProductsCopy,
    productToAddToBasket
  ) => {
    const newBasketProduct = { id: productToAddToBasket.id, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketProductsCopy];
    setBasketProducts(newBasket);
    setLocalStorage(username, newBasket);
  };

  const incrementProductQuantityInBasket = (
    username,
    basketProductsCopy,
    existingProductIndex
  ) => {
    basketProductsCopy[existingProductIndex].quantity++;
    setBasketProducts(basketProductsCopy);
    setLocalStorage(username, basketProductsCopy);
  };

  return {
    basketProducts,
    setBasketProducts,
    handleAddProductToBasket,
    handleDeleteProductFromBasket,
    isBasketEmpty,
  };
};
