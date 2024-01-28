import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  filterArrayById,
  findArrayElementById,
  findIndexById,
  isEmptyArray,
} from "../utils/array";

export const useBasket = () => {
  const fakeBasketTest = fakeBasket.LARGE_WEIRD;
  //   const [basketProducts, setBasketProducts] = useState([]);
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
    // const productToDeleteFromBasket = findArrayElementById(
    //   basketProductsCopy,
    //   id
    // );
    // const indexProductToDeleteFromBasket = basketProductsCopy.indexOf(
    //   productToDeleteFromBasket
    // );
    // basketProductsCopy.splice(indexProductToDeleteFromBasket, 1);
    const basketUpdated = filterArrayById(basketProducts, id);
    setBasketProducts(basketUpdated);
  };

  const createNewProductCardInBasket = (
    basketProductsCopy,
    productToAddToBasket
  ) => {
    productToAddToBasket.quantity = 1;
    basketProductsCopy.unshift(productToAddToBasket);
    setBasketProducts(basketProductsCopy);
  };

  const incrementProductQuantityInBasket = (
    basketProductsCopy,
    existingProductIndex
  ) => {
    basketProductsCopy[existingProductIndex].quantity++;
    setBasketProducts(basketProductsCopy);
  };

  const updateBasketProduct = (menuProductEdited) => {
    const basketProductsCopy = structuredClone(basketProducts);

    const existingProductIndex = findIndexById(
      basketProductsCopy,
      menuProductEdited.id
    );

    basketProductsCopy[existingProductIndex] = menuProductEdited;
    basketProductsCopy[existingProductIndex].quantity =
      basketProducts[existingProductIndex].quantity;

    setBasketProducts(basketProductsCopy);
  };

  return {
    basketProducts,
    setBasketProducts,
    handleAddProductToBasket,
    handleDeleteProductFromBasket,
    isBasketEmpty,
    updateBasketProduct,
  };
};
