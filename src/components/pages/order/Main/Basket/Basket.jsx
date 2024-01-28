import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketProducts from "./BasketProducts";
import MenuContext from "../../../../../context/MenuContext";
import EmptyBasket from "./EmptyBasket";
import OrderContext from "../../../../../context/OrderContext";

const Basket = () => {
  const {
    basketProducts,
    handleDeleteProductFromBasket,
    isBasketEmpty,
    basketProductSelected,
  } = useContext(MenuContext);

  const { isModeAdmin } = useContext(OrderContext);

  const checkIfBasketProductIsSelected = (
    idProductInBasket,
    idProductClickedOn
  ) => {
    return idProductInBasket === idProductClickedOn;
  };

  const totalPrices = basketProducts.reduce((acc, product) => {
    if (isNaN(product.price)) return acc;
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
          isModeAdmin={isModeAdmin}
          checkIfBasketProductIsSelected={checkIfBasketProductIsSelected}
          basketProductSelected={basketProductSelected}
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
