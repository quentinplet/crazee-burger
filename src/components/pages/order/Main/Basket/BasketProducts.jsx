import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";

const BasketProducts = ({
  basketProducts,
  handleDeleteProductFromBasket,
  isModeAdmin,
  handleClickProductBasket,
  checkIfBasketProductIsSelected,
  basketProductSelected,
}) => {
  const handleClick = (id) => {
    handleClickProductBasket(id);
  };
  const handleDelete = (event, idProduct) => {
    handleDeleteProductFromBasket(idProduct);
    event.stopPropagation();
  };
  return (
    <BodyStyled>
      {basketProducts.map(({ id, price, title, imageSource, quantity }) => (
        <BasketCard
          key={id}
          onDelete={(event) => handleDelete(event, id)}
          price={formatPrice(price)}
          title={title ? title : " "}
          imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
          quantity={quantity}
          isModeAdmin={isModeAdmin}
          onClick={() => handleClick(id)}
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
