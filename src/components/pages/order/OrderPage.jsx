import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";

const OrderPage = () => {
  const { userName } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar userName={userName} />
        <Main />
      </div>
    </OrderPageStyled>
  );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
