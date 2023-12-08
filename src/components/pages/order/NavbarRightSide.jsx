import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

const NavbarRightSide = ({ userName }) => {
  return (
    <NavbarRightSideStyled>
      <div>
        <h1>
          Hey, <span>{userName}</span>{" "}
        </h1>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <BsPersonCircle className="icon" />
    </NavbarRightSideStyled>
  );
};

export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
  background: white;
  font-family: "Open Sans", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;

  h1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #747b91;

    span {
      color: #ffa01b;
      font-weight: 700;
    }
  }

  button {
    border: none;
    color: white;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    cursor: pointer;
  }

  .icon {
    font-size: 36px;
    color: #747b91;
  }
`;
