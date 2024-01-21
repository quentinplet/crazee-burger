import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";

const Card = ({
  imageSource,
  title,
  leftDescription,
  onDelete,
  hasDeleteButton,
  className,
  onClick,
  isHoverable,
}) => {
  return (
    <CardStyled
      className={className}
      onClick={onClick}
      isHoverable={isHoverable}
    >
      <div className="card">
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
          <div className="title">{title}</div>
          <div className="description">
            <p className="price">{leftDescription}</p>
            <Button className="primary-button" label="Ajouter" />
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.div`
  ${({ isHoverable }) => isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  width: 242px;

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
  }
`;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-in-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighLight};
    cursor: pointer;
    border: 1px solid ${theme.colors.primary};
  }
`;
