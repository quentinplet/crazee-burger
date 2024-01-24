import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const BasketBody = () => {
  return (
    <BodyStyled>
      <span className="empty-message">Votre Commande est vide.</span>
    </BodyStyled>
  );
};

export default BasketBody;

const BodyStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  .empty-message {
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
  }
`;
