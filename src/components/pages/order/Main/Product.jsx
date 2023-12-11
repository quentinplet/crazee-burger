import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths";

const Product = ({ imageSource, title, price }) => {
  const priceEuros = formatPrice(price);
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt="title" />
      </div>

      <div className="info-text">
        <h1>{title}</h1>
        <div className="description">
          <p className="price">{priceEuros}</p>
          <PrimaryButton className="primary-button" label="Ajouter" />
        </div>
      </div>
    </ProductStyled>
  );
};

export default Product;

const ProductStyled = styled.div`
  width: 240px;
  height: 330px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  background-color: #fff;
  border-radius: 15px;
  padding: 0 20px;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }

  .image img {
    object-fit: contain;
    object-position: center;
    height: 145px;
    width: 200px;
  }

  .info-text {
    margin-top: 15px;

    h1 {
      text-align: start;
      color: #17161a;
      font-family: Amatic SC;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .description {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        color: #ffa01b;
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }

      .primary-button {
        width: 95px;
        height: 38px;
      }
    }
  }
`;
