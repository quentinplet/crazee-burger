import React from "react";
import styled from "styled-components";

const Basket = () => {
  return (
    <BasketStyled>
      <div className="head">
        <div className="div">Total</div>
        <div className="price">0.00 €</div>
      </div>
      <div className="body">
        <p>Votre Commande est vide</p>
      </div>
      <div className="footer">Codé ave ❤️ et React.JS</div>
    </BasketStyled>
  );
};

export default Basket;

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  .head {
    background: red;
    font-size: 36px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
  }

  .body {
    background: blue;
    border-radius: 0px 0px 0px 15px;
  }

  .footer {
    background: green;
    bottom: 0;
  }
`;
