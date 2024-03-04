import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../context/OrderContext";
import MenuContext from "../../../../context/MenuContext";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import Basket from "./Basket/Basket";
import { useMenu } from "../../../../hooks/useMenu";
import { useBasket } from "../../../../hooks/useBasket";
import { findArrayElementById } from "../../../../utils/array";
import { getMenu } from "../../../../api/product";

const Main = () => {
  const { isModeAdmin, setIsCollapsed, setCurrentTabSelected, userName } =
    useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const titleEditRef = useRef();

  const menuTest = fakeMenu.LARGE;
  const {
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    generateNewMenu,
  } = useMenu(menuTest);

  const handleProductSelected = async (idProductSelected) => {
    if (!isModeAdmin) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = findArrayElementById(menu, idProductSelected);
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const initialiseMenu = async () => {
    const menuReceived = await getMenu(userName);
    console.log("menuReceived", menuReceived);
    setMenu(menuReceived);
    if (!menuReceived) return;
  };

  useEffect(() => {
    initialiseMenu();
  }, []);

  const {
    basketProducts,
    handleAddProductToBasket,
    handleDeleteProductFromBasket,
    isBasketEmpty,
  } = useBasket();

  const menuContextValue = {
    handleAddProduct,
    handleDeleteProduct,
    generateNewMenu,
    menu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
    handleAddProductToBasket,
    handleDeleteProductFromBasket,
    basketProducts,
    isBasketEmpty,
    handleProductSelected,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <MainStyled>
        <Basket />
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
  grid-template-columns: 25% 1fr;

  overflow-y: hidden;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;

    /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
