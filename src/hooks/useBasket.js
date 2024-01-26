import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { findArrayElementById } from "../utils/array";

export const useBasket = () => {
  const fakeBasketTest = fakeBasket.LARGE_WEIRD;
  //   const [basketProducts, setBasketProducts] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);

  const isBasketEmpty = basketProducts.length === 0;

  const handleAddProductToBasket = (productToAddToBasket) => {
    const basketProductsCopy = structuredClone(basketProducts);

    const existingProductIndex = basketProductsCopy.findIndex(
      (product) => product.id === productToAddToBasket.id
    );
    const isProductAlreadyInBasket = existingProductIndex !== -1;
    if (!isProductAlreadyInBasket) {
      productToAddToBasket.quantity = 1;
      basketProductsCopy.unshift(productToAddToBasket);
    } else {
      basketProductsCopy[existingProductIndex].quantity++;
    }

    setBasketProducts(basketProductsCopy);
  };

  const handleDeleteProductFromBasket = (id) => {
    const basketProductsCopy = structuredClone(basketProducts);
    const productToDeleteFromBasket = findArrayElementById(
      basketProductsCopy,
      id
    );
    const indexProductToDeleteFromBasket = basketProductsCopy.indexOf(
      productToDeleteFromBasket
    );
    basketProductsCopy.splice(indexProductToDeleteFromBasket, 1);
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
