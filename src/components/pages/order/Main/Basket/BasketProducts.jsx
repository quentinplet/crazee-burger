import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { findArrayElementById } from "../../../../../utils/array";
import MenuContext from "../../../../../context/MenuContext";
import OrderContext from "../../../../../context/OrderContext";
import { checkIfProductIsSelected } from "../../../../../utils/helper";

const BasketProducts = () => {
  const {
    basketProducts,
    menu,
    handleDeleteProductFromBasket,
    handleProductSelected,
    productSelected,
  } = useContext(MenuContext);

  const { userName } = useContext(OrderContext);

  const { isModeAdmin } = useContext(OrderContext);

  const handleOnDelete = (event, idProduct) => {
    event.stopPropagation();
    handleDeleteProductFromBasket(userName, idProduct);
  };
  return (
    <BodyStyled>
      {basketProducts.map((basketProduct) => {
        const menuProduct = findArrayElementById(menu, basketProduct.id);
        return (
          <BasketCard
            key={basketProduct.id}
            {...menuProduct}
            onDelete={(event) => handleOnDelete(event, basketProduct.id)}
            imageSource={
              menuProduct.imageSource
                ? menuProduct.imageSource
                : IMAGE_COMING_SOON
            }
            quantity={basketProduct.quantity}
            isClickable={isModeAdmin}
            onClick={() => handleProductSelected(basketProduct.id)}
            isSelected={checkIfProductIsSelected(
              basketProduct.id,
              productSelected.id
            )}
          />
        );
      })}
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
