import { useState } from "react";
import { filterArrayById } from "../utils/array";
import { formatPrice } from "../utils/maths";

export const useMenu = (fakeMenu) => {
  const [menu, setMenu] = useState(fakeMenu);

  const handleDeleteProduct = (productId) => {
    const menuCopy = structuredClone(menu);

    const menuUpdated = filterArrayById(menuCopy, productId);

    setMenu(menuUpdated);
  };

  const handleAddProduct = (newProduct) => {
    const menuCopy = structuredClone(menu);
    newProduct.price = formatPrice(newProduct.price);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleEditProduct = (productBeingEdited) => {
    const menuCopy = structuredClone(menu);
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    menuCopy[indexOfProductToEdit] = productBeingEdited;
    setMenu(menuCopy);
  };

  const generateNewMenu = () => {
    setMenu(fakeMenu);
  };

  return {
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    generateNewMenu,
  };
};
