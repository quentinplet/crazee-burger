import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import Footer from "./Footer";
import BasketProducts from "./BasketProducts";
import MenuContext from "../../../../../context/MenuContext";
import EmptyBasket from "./EmptyBasket";
import { isEmptyArray } from "../../../../../utils/array";

const Basket = () => {
  const { basketProducts, menu } = useContext(MenuContext);

  if (!menu) return <span>Chargement...</span>;
  return (
    <BasketStyled>
      <Total />
      {isEmptyArray(basketProducts) ? <EmptyBasket /> : <BasketProducts />}
      <Footer />
    </BasketStyled>
  );
};

export default Basket;

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  height: 85vh;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;
