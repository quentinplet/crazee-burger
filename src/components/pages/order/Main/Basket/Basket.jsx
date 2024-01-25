import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import Header from "../../../../reusable-ui/Header";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketProducts from "./BasketProducts";
import MenuContext from "../../../../../context/MenuContext";
import { fakeBasket } from "../../../../../fakeData/fakeBasket";
import EmptyBasket from "./EmptyBasket";

const Basket = () => {
  const { basketProducts, handleDeleteProductFromBasket, isBasketEmpty } =
    useContext(MenuContext);
  const totalPrices = basketProducts.reduce((acc, product) => {
    return product.price * product.quantity + acc;
  }, 0);
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(totalPrices)} />
      {isBasketEmpty ? (
        <EmptyBasket />
      ) : (
        <BasketProducts
          basketProducts={basketProducts}
          handleDeleteProductFromBasket={handleDeleteProductFromBasket}
        />
      )}
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
