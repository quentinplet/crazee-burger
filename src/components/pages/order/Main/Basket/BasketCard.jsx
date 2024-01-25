import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";

const BasketCard = ({
  imageSource,
  title,
  price,
  quantity,
  handleDeleteProductFromBasket,
}) => {
  return (
    <BasketCardStyled>
      <div className="basketCardImage">
        <img src={imageSource} alt={title} />
      </div>
      <div className="basketCardInfo">
        <div className="basketCardTitle">{title}</div>
        <div className="basketCardPrice">{price}</div>
      </div>
      <div className="basketCardQuantity"> x {quantity}</div>
      <div className="delete-basket-card">
        <button
          onClick={handleDeleteProductFromBasket}
          className="delete-basket-button"
        >
          X
        </button>
      </div>
    </BasketCardStyled>
  );
};

export default BasketCard;

const BasketCardStyled = styled.div`
  /* border: 1px solid blue; */
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  column-gap: 21px;
  border-radius: 5px;
  background: #fff;
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.2);
  .basketCardImage {
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: contain;
      object-position: center;
      height: 70px;
      width: 85px;
    }
  }

  /* .basketCardInfo {
    height: 70px;
    width: 115px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    white-space: nowrap;

    .basketCardTitle {
      color: #17161a;
      font-family: "Amatic SC";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      text-overflow: ellipsis;
    }
  } */

  .basketCardInfo {
    width: 115px;
    overflow: hidden;
    white-space: nowrap;

    .basketCardTitle {
      font-family: "Amatic SC";
      color: #17161a;
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .basketCardPrice {
      color: #ffa01b;
      font-family: "Open Sans";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .basketCardQuantity {
    /* border: 1px solid red; */
    height: 70px;
    width: 35px;
    /* padding-right: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffa01b;

    font-family: "Open Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .delete-basket-card {
    position: absolute;
    top: 0;
    right: 5px;

    .delete-basket-button {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #ffa01b;
      color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;
