import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import MenuContext from "../../../../../context/MenuContext";
import Basket from "./Basket";
import BasketCard from "./BasketCard";
import { fakeBasket } from "../../../../../fakeData/fakeBasket";
import { formatPrice } from "../../../../../utils/maths";

const DEFAULT_IMAGE = "/images/coming-soon.png";

const BasketProducts = ({ basketProducts, handleDeleteProductFromBasket }) => {
  return (
    <BodyStyled>
      {basketProducts.map(({ id, price, title, imageSource, quantity }) => (
        <BasketCard
          key={id}
          handleDeleteProductFromBasket={() =>
            handleDeleteProductFromBasket(id)
          }
          price={formatPrice(price)}
          title={title ? title : " "}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          quantity={quantity}
        />
      ))}
    </BodyStyled>
  );
};

export default BasketProducts;

const BodyStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  padding: 20px 16px;
  row-gap: 20px;

  scrollbar-gutter: stable both-edges;
  &:active,
  &:hover,
  &:focus {
    overflow-y: scroll;
  }

  /* height: calc(95vh - 10vh - 70px - 70px); */
`;
