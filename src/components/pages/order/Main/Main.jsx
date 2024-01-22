import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../context/OrderContext";
import MenuContext from "../../../../context/MenuContext";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../../enums/product";

const Main = () => {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const [productSelected, setProductSelected] = useState({});
  const [productIsSelected, setProductIsSelected] = useState(false);

  const titleEditRef = useRef();

  const menuTest = fakeMenu.MEDIUM;

  const [menu, setMenu] = useState(menuTest);

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

  const menuContextValue = {
    handleAddProduct,
    handleDeleteProduct,
    generateNewMenu,
    menu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    productIsSelected,
    setProductIsSelected,
    handleEditProduct,
    titleEditRef,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <MainStyled>
        {/* <div className="basket">basket</div> */}
        <div className="menu-and-admin">
          <Menu menu={menu} isModeAdmin={isModeAdmin} />
          {isModeAdmin && <Admin />}
        </div>
      </MainStyled>
    </MenuContext.Provider>
  );
};

export default Main;

const MainStyled = styled.div`
  height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  //this code wiil be use for the basket
  /* grid-template-columns: 25% 1fr; */

  /* .basket {
    background: pink;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
