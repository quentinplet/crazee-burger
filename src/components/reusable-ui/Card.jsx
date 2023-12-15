import React, { useContext } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme";
import OrderContext from "../../context/OrderContext";

const Card = ({ imageSource, title, leftDescription, handleDeleteProduct }) => {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  return (
    <CardStyled>
      <div className="image">
        <img src={imageSource} alt="title" />
        {isModeAdmin && (
          <button onClick={handleDeleteProduct} className="delete-button">
            X
          </button>
        )}
      </div>
      <div className="info-text">
        <h1>{title}</h1>
        <div className="description">
          <p className="price">{leftDescription}</p>
          <PrimaryButton className="primary-button" label="Ajouter" />
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
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound};
  padding: 0 ${theme.spacing.md};
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    position: relative;
  }

  .image img {
    object-fit: contain;
    object-position: center;
    height: 145px;
    width: 200px;
  }

  .delete-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: ${theme.colors.background_white};
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.extraRound};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-text {
    margin-top: 15px;

    h1 {
      text-align: start;
      color: ${theme.colors.dark};
      font-family: Amatic SC;
      font-size: ${theme.fonts.size.P4};
      font-style: normal;
      font-weight: ${theme.fonts.weights.bold};
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
        color: ${theme.colors.primary};
        font-family: Open Sans;
        font-size: ${theme.fonts.size.P1};
        font-style: normal;
        font-weight: ${theme.fonts.weights.regular};
        line-height: 22px;
      }

      .primary-button {
        width: 95px;
        height: 38px;
      }
    }
  }
`;
