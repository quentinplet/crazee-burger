import React, { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import { theme } from "../../../../theme";
import MenuContext from "../../../../context/MenuContext";
import MenuEmpty from "./MenuEmpty";

const Menu = ({ newMenu }) => {
  const { handleDeleteProduct } = useContext(MenuContext);

  const listCard = newMenu.map(({ id, title, price, imageSource }) => {
    return (
      <Card
        key={id}
        leftDescription={formatPrice(price)}
        title={title}
        imageSource={imageSource}
        handleDeleteProduct={() => handleDeleteProduct(id)}
      />
    );
  });

  const displayMenu = newMenu.length > 0 ? listCard : <MenuEmpty />;

  return <MenuStyled>{displayMenu}</MenuStyled>;
};

export default Menu;

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  width: 100%;
  margin: 0 auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  /* grid-template-columns: repeat(minmax(auto-fill, 4), minmax(240px, 1fr)); */
  grid-row-gap: 60px;
  grid-column-gap: 60px;
  padding: 50px 50px 150px;
  overflow-y: scroll;
`;
