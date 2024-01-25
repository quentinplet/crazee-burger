import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import Header from "../../../../reusable-ui/Header";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import MenuContext from "../../../../../context/MenuContext";
import { fakeBasket } from "../../../../../fakeData/fakeBasket";

const Basket = () => {
  const { basketProducts, handleDeleteProductFromBasket } =
    useContext(MenuContext);
  const fakeBasketTest = fakeBasket.LARGE;
  const totalPrices = basketProducts.reduce((acc, product) => {
    return product.price * product.quantity + acc;
  }, 0);
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(totalPrices)} />
      <BasketBody
        basketProducts={basketProducts}
        handleDeleteProductFromBasket={handleDeleteProductFromBasket}
      />
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
