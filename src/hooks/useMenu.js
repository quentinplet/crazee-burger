import { useState } from "react";
import { filterArrayById } from "../utils/array";
import { syncBothMenus } from "../api/product";

export const useMenu = (fakeMenu) => {
  const [menu, setMenu] = useState(fakeMenu);

  const handleDeleteProduct = (username, productId) => {
    const menuCopy = structuredClone(menu);

    const menuUpdated = filterArrayById(menuCopy, productId);

    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleAddProduct = (username, newProduct) => {
    const menuCopy = structuredClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
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
