import { useState } from "react";

export const useBasket = (menu) => {
  const [basketProducts, setBasketProducts] = useState([]);

  const handleAddProductToBasket = (id) => {
    const productToAddToBasket = menu.find((product) => product.id === id);
    const basketProductsCopy = structuredClone(basketProducts);

    const existingProductIndex = basketProductsCopy.findIndex(
      (product) => product.id === id
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
  };
};
