import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  filterArrayById,
  findArrayElementById,
  findIndexById,
} from "../utils/array";

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
      addNewProductCardInBasket(basketProductsCopy, productToAddToBasket);
    } else {
      incrementProductQuantityInBasket(
        basketProductsCopy,
        existingProductIndex
      );
    }
    setBasketProducts(basketProductsCopy);
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

  const updateBasketProduct = (menuProductEdited) => {
    const basketProductsCopy = structuredClone(basketProducts);

    const existingProductIndex = findIndexById(
      basketProductsCopy,
      menuProductEdited.id
    );

    basketProductsCopy[existingProductIndex] = menuProductEdited;

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

const incrementProductQuantityInBasket = (
  basketProductsCopy,
  existingProductIndex
) => {
  basketProductsCopy[existingProductIndex].quantity++;
};

const addNewProductCardInBasket = (
  basketProductsCopy,
  productToAddToBasket
) => {
  productToAddToBasket.quantity = 1;
  basketProductsCopy.unshift(productToAddToBasket);
};
