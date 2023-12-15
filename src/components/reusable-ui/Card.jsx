import React, { useContext } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";

const Card = ({
  imageSource,
  title,
  leftDescription,
  onDelete,
  hasDeleteButton,
}) => {
  return (
    <CardStyled>
      {hasDeleteButton && (
        <button
          onClick={onDelete}
          className="delete-button"
          aria-label="delete-button"
        >
          <TiDelete className="icon" />
        </button>
      )}
      <div className="image">
        <img src={imageSource} alt="title" />
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
  position: relative;

  .delete-button {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: ${theme.colors.primary};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    background: none;

    .icon {
      width: 100%;
      height: 100%;
    }

    :hover {
      color: ${theme.colors.red};
    }

    :active {
      color: ${theme.colors.primary};
    }
  }

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
