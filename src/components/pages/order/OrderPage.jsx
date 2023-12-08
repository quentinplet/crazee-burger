import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const OrderPage = () => {
  const { userName } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          navbar
          <h1>Bonjour {userName} </h1>
          <div></div>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <div className="main">Main</div>
      </div>
    </OrderPageStyled>
  );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;

    .navbar {
      background: blue;
      height: 10vh;
    }
    .main {
      background: green;
      /* height: calc(95vh - 10vh); */
      flex: 1;
    }
  }
`;
