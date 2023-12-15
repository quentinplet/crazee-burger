import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../context/OrderContext";
import MenuContext from "../../../../context/MenuContext";
import { fakeMenu } from "../../../../fakeData/fakeMenu";

const Main = () => {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const menuTest = fakeMenu.MEDIUM;

  const [menu, setMenu] = useState(menuTest);

  const handleDeleteProduct = (id) => {
    const menuCopy = [...menu];

    const menuUpdated = menuCopy.filter((item) => item.id !== id);

    setMenu(menuUpdated);
  };

  const handleAddProduct = (newProduct) => {
    setMenu((prevState) => [newProduct, ...prevState]);
  };

  const generateNewMenu = () => {
    setMenu(menuTest);
  };

  const menuContextValue = {
    handleAddProduct,
    handleDeleteProduct,
    generateNewMenu,
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
