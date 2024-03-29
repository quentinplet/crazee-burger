import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import { MdDeleteForever } from "react-icons/md";
import { formatPrice } from "../../../../../utils/maths";

const BasketCard = ({
  imageSource,
  title,
  price,
  quantity,
  onDelete,
  isClickable,
  onClick,
  isSelected,
}) => {
  return (
    <BasketCardStyled
      $isClickable={isClickable}
      onClick={onClick}
      $isSelected={isSelected}
    >
      <div className="image">
        <img src={imageSource} alt={title} draggable="false" />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="price">{formatPrice(price)}</div>
        </div>
        <div className="quantity">
          <span> x {quantity}</span>
        </div>
      </div>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
    </BasketCardStyled>
  );
};

export default BasketCard;

const BasketCardStyled = styled.div`
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};
  box-sizing: border-box;
  height: 86px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.basketCard};

  position: relative;

  ${({ $isClickable, $isSelected }) =>
    $isClickable && $isSelected && selectedStyle}

  .image {
    box-sizing: border-box;
    height: 70px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;

      .title {
        display: flex;
        align-items: center;
        font-family: ${theme.fonts.family.stylish}, cursive;
        font-size: ${theme.fonts.size.P3};
        line-height: 32px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        min-width: 0;

        span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .price {
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.medium};
        font-family: "Open Sans", sans-serif;
      }
    }

    .quantity {
      font-weight: ${theme.fonts.weights.medium};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: ${theme.fonts.size.SM};
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  &:hover {
    .delete-button {
      border: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }
      }
      &:active {
        .icon {
          color: ${theme.colors.white};
        }
      }
    }
  }
`;

const selectedStyle = css`
  background-color: ${theme.colors.primary};
  .text-info {
    .price {
      color: ${theme.colors.white};
    }

    .quantity {
      color: ${theme.colors.white};
    }
  }
`;
