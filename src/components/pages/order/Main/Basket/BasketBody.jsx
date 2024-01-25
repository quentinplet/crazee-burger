import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import MenuContext from "../../../../../context/MenuContext";
import Basket from "./Basket";
import BasketCard from "./BasketCard";
import { fakeBasket } from "../../../../../fakeData/fakeBasket";
import { formatPrice } from "../../../../../utils/maths";

const DEFAULT_IMAGE = "/images/coming-soon.png";

const BasketBody = ({ basketProducts, handleDeleteProductFromBasket }) => {
  return (
    <BodyStyled>
      {/* <span className="empty-message">Votre Commande est vide.</span> */}
      {/* <div className="basket-card">
        {basketProducts.map((product) => (
          <div key={product.id} className="basket-product">
            <div className="basket-product-title">{product.title}</div>
            <div className="basket-product-price">{product.price}</div>
          </div>
        ))}
      </div> */}
      {/* <BasketCard /> */}
      {basketProducts.map((product) => (
        <BasketCard
          key={product.id}
          handleDeleteProductFromBasket={() =>
            handleDeleteProductFromBasket(product.id)
          }
          price={formatPrice(product.price)}
          title={product.title}
          imageSource={
            product.imageSource ? product.imageSource : DEFAULT_IMAGE
          }
          quantity={product.quantity}
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

  .empty-message {
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    text-align: center;
    justify-content: center;
    align-items: center;
    flex: 1;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish}, cursive;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
