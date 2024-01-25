import React, { useContext, useRef, useState } from "react";
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

const Main = () => {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const [productSelected, setProductSelected] = useState({});

  // const [productAddedToBasket, setProductAddedToBasket] = useState({});
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

  const titleEditRef = useRef();

  const menuTest = fakeMenu.MEDIUM;

  const {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    generateNewMenu,
  } = useMenu(menuTest);

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
    // productAddedToBasket,
    // setProductAddedToBasket,
    handleAddProductToBasket,
    handleDeleteProductFromBasket,
    basketProducts,
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
