import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const Basket = () => {
  return (
    <BasketStyled>
      <div className="head">
        <div className="div">Total</div>
        <div className="price">0.00 €</div>
      </div>
      <div className="body">
        <p>Votre Commande est vide</p>
      </div>
      <div className="footer">Codé ave ❤️ et React.JS</div>
    </BasketStyled>
  );
};

export default Basket;

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  .head {
    background: red;
    font-size: 36px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    height: 70px;
    background: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
  }

  .body {
    background: ${theme.colors.background_white};
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;
    flex: 1;
  }

  .footer {
    bottom: 0;
    height: 70px;
    background: ${theme.colors.background_dark};
  }
`;
