import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";

const BasketProducts = ({
  basketProducts,
  handleDeleteProductFromBasket,
  isModeAdmin,
  checkIfBasketProductIsSelected,
  basketProductSelected,
  handleProductSelected,
}) => {
  const handleOnDelete = (event, idProduct) => {
    event.stopPropagation();
    handleDeleteProductFromBasket(idProduct);
  };
  return (
    <BodyStyled>
      {basketProducts.map(({ id, price, title, imageSource, quantity }) => (
        <BasketCard
          key={id}
          onDelete={(event) => handleOnDelete(event, id)}
          price={formatPrice(price)}
          title={title ? title : " "}
          imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
          quantity={quantity}
          isClickable={isModeAdmin}
          onClick={() => handleProductSelected(id)}
          isSelected={checkIfBasketProductIsSelected(
            id,
            basketProductSelected.id
          )}
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
`;
