import { useState } from "react";

export const useMenu = (fakeMenu) => {
  const [menu, setMenu] = useState(fakeMenu);

  const handleDeleteProduct = (productId) => {
    const menuCopy = structuredClone(menu);

    const menuUpdated = menuCopy.filter((product) => product.id !== productId);

    setMenu(menuUpdated);
    if (productSelected.id === productId) {
      setProductSelected({ EMPTY_PRODUCT });
    }
    titleEditRef.current && titleEditRef.current.focus();
  };

  const handleAddProduct = (newProduct) => {
    const menuCopy = structuredClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleEditProduct = (productBeingEdited) => {
    const menuCopy = structuredClone(menu);

    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    // const menuUpdated = menuCopy.map((product) => {
    //   if (product.id === productBeingEdited.id) {
    //     return productBeingEdited;
    //   }
    //   return product;
    // });

    setMenu(menuCopy);
  };

  const generateNewMenu = () => {
    setMenu(menuTest);
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
