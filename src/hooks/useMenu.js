import { useState } from "react";
import { filterArrayById } from "../utils/array";
import { syncBothMenus } from "../api/product";
import { fakeMenu } from "../fakeData/fakeMenu";

export const useMenu = () => {
  const [menu, setMenu] = useState(null);

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

  const handleEditProduct = (username, productBeingEdited) => {
    const menuCopy = structuredClone(menu);
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;
    setMenu(menuCopy);
    syncBothMenus(username, menuCopy);
  };

  const generateNewMenu = (username) => {
    setMenu(fakeMenu.LARGE);
    syncBothMenus(username, fakeMenu.LARGE);
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
