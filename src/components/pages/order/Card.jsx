import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../utils/maths";

const Card = ({ imageSource, title, price }) => {
  const priceEuros = formatPrice(price);
  return (
    <CardStyled>
      <div className="image">
        <img
          src={imageSource}
          alt="burger1 image"
          width="200px"
          height="145px"
        />
      </div>

      <div className="infos">
        <h1>{title}</h1>
        <div className="price-add">
          <p className="price">{priceEuros}</p>
          <PrimaryButton className="button" label="Ajouter" />
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  background-color: #fff;
  border-radius: 15px;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    margin: 0 20px;
    margin-bottom: 15px;
  }

  .image img {
    object-fit: contain;
    object-position: center;
    height: 145px;
    width: 200px;
  }

  .button {
    width: 95px;
    height: 38px;
  }

  .infos {
    margin: 0 20px;
  }

  .price-add {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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

  .price {
    color: #ffa01b;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;
