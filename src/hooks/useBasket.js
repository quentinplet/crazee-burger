import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { filterArrayById, isEmptyArray } from "../utils/array";

export const useBasket = () => {
  const fakeBasketTest = fakeBasket.LARGE_WEIRD;
  const [basketProducts, setBasketProducts] = useState([]);

  const isBasketEmpty = isEmptyArray(basketProducts);

  const handleAddProductToBasket = (productToAddToBasket) => {
    const basketProductsCopy = structuredClone(basketProducts);

    const existingProductIndex = basketProductsCopy.findIndex(
      (product) => product.id === productToAddToBasket.id
    );
    const isProductAlreadyInBasket = existingProductIndex !== -1;

    if (!isProductAlreadyInBasket) {
      createNewProductCardInBasket(basketProductsCopy, productToAddToBasket);
      return;
    }
    incrementProductQuantityInBasket(basketProductsCopy, existingProductIndex);
  };

  const handleDeleteProductFromBasket = (id) => {
    const basketUpdated = filterArrayById(basketProducts, id);
    setBasketProducts(basketUpdated);
  };

  const createNewProductCardInBasket = (
    basketProductsCopy,
    productToAddToBasket
  ) => {
    const newBasketProduct = { id: productToAddToBasket.id, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketProductsCopy];
    setBasketProducts(newBasket);
  };

  const incrementProductQuantityInBasket = (
    basketProductsCopy,
    existingProductIndex
  ) => {
    basketProductsCopy[existingProductIndex].quantity++;
    setBasketProducts(basketProductsCopy);
  };

  return {
    basketProducts,
    setBasketProducts,
    handleAddProductToBasket,
    handleDeleteProductFromBasket,
    isBasketEmpty,
  };
};
