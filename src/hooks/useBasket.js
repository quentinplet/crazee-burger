import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = (menu) => {
  const fakeBasketTest = fakeBasket.LARGE_WEIRD;
  //   const [basketProducts, setBasketProducts] = useState([]);
  const [basketProducts, setBasketProducts] = useState(fakeBasketTest);

  const isBasketEmpty = basketProducts.length === 0;

  const handleAddProductToBasket = (productToAddToBasket) => {
    const basketProductsCopy = structuredClone(basketProducts);

    const existingProductIndex = basketProductsCopy.findIndex(
      (product) => product.id === productToAddToBasket.id
    );
    if (existingProductIndex !== -1) {
      basketProductsCopy[existingProductIndex].quantity++;
    } else {
      productToAddToBasket.quantity = 1;
      basketProductsCopy.unshift(productToAddToBasket);
    }
    setBasketProducts(basketProductsCopy);
  };

  const handleDeleteProductFromBasket = (id) => {
    const basketProductsCopy = structuredClone(basketProducts);
    const productToDeleteFromBasket = basketProductsCopy.find(
      (product) => product.id === id
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
