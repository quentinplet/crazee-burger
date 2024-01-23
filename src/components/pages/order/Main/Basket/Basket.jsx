import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import Header from "./Header";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";

const Basket = () => {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0.0)} />
      <div className="body">
        <p>Votre Commande est vide</p>
      </div>
      <Footer>Codé ave ❤️ et React.JS</Footer>
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
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }

  .footer {
    bottom: 0;
    height: 70px;
    background: ${theme.colors.background_dark};
  }
`;
