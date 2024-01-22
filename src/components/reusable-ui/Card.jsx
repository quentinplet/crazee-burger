import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";
import { BsXLg } from "react-icons/bs";

const Card = ({
  imageSource,
  title,
  leftDescription,
  onDelete,
  hasDeleteButton,
  onClick,
  isHoverable,
  isSelected,
  handleClickPropagation,
}) => {
  return (
    <CardStyled
      onClick={onClick}
      $isSelected={isSelected}
      $isHoverable={isHoverable}
    >
      <div className="card">
        {hasDeleteButton && (
          <button
            onClick={(e) => {
              handleClickPropagation(e);
              onDelete();
            }}
            className="delete-button"
            aria-label="delete-button"
          >
            <TiDelete className="icon" />
          </button>
        )}
        <div className="image">
          <img src={imageSource} alt="title" draggable="false" />
        </div>
        <div className="info-text">
          <div className="title">{title}</div>
          <div className="description">
            <p className="price">{leftDescription}</p>
            <Button
              className="primary-button"
              label="Ajouter"
              onClick={(e) => handleClickPropagation(e)}
            />
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-in-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighLight};
    cursor: pointer;
    border: 1px solid ${theme.colors.primary};
  }
`;

const CardStyled = styled.div`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  width: 242px;
  height: 332px;

  .card {
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    /* padding: 20px; */
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 0px ${theme.spacing.md};
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
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    .image img {
      object-fit: contain;
      object-position: center;
      height: 145px;
      width: 200px;
    }

    .info-text {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        text-align: start;
        color: ${theme.colors.dark};
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.size.P4};
        font-style: normal;
        font-weight: ${theme.fonts.weights.bold};
        line-height: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        bottom: 10px;
        position: relative;
        width: 100%;
      }

      .description {
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

          span {
            font-size: ${theme.fonts.size.XS};
          }
        }
      }
    }

    ${({ $isHoverable, $isSelected }) =>
      $isHoverable && $isSelected && selectedStyle}
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .primary-button {
    color: ${theme.colors.primary};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      transition: all 0.2s ease-in-out;
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .info-text {
    .description {
      .price {
        color: ${theme.colors.white};
      }
    }
  }
`;
