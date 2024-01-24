import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import Header from "../../../../reusable-ui/Header";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";

const Basket = () => {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0.0)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
};

export default Basket;

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
`;
