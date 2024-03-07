import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { BASKET_MESSAGE } from "../../../../../enums/product";

const EmptyBasket = ({ isLoading }) => {
  return (
    <EmptyBasketStyled>
      {isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
    </EmptyBasketStyled>
  );
};

export default EmptyBasket;

const EmptyBasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  width: 100%;
  display: flex;
  height: calc(95vh - 10vh - 70px - 70px);
  text-align: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  align-self: center;
  line-height: 2;
  font-family: ${theme.fonts.family.stylish}, cursive;
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
`;
