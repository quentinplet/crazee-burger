import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import MenuContext from "../../../../../context/MenuContext";
import Basket from "./Basket";
import BasketCard from "./BasketCard";
import { fakeBasket } from "../../../../../fakeData/fakeBasket";
import { formatPrice } from "../../../../../utils/maths";
import EmptyMessage from "./EmptyMessage";

const DEFAULT_IMAGE = "/images/coming-soon.png";

const BasketBody = ({ basketProducts, handleDeleteProductFromBasket }) => {
  return (
    <BodyStyled>
      {basketProducts.length === 0 && <EmptyMessage />}
      {basketProducts.map(({ id, price, title, imageSource, quantity }) => (
        <BasketCard
          key={id}
          handleDeleteProductFromBasket={() =>
            handleDeleteProductFromBasket(id)
          }
          price={formatPrice(price)}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          quantity={quantity}
        />
      ))}
    </BodyStyled>
  );
};

export default BasketBody;

const BodyStyled = styled.div`
  /* flex: 1; */
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
  /* align-items: center; */
  padding: 20px 16px;
  row-gap: 20px;
  height: calc(95vh - 10vh - 70px - 70px);
`;
