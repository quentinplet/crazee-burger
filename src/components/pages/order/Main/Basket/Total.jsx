import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import { formatPrice } from "../../../../../utils/maths";
import { calculateSumToPay } from "../../../../../utils/helper";
import MenuContext from "../../../../../context/MenuContext";

const Total = () => {
  const { basketProducts, menu } = useContext(MenuContext);
  const sumToPay = calculateSumToPay(basketProducts, menu);
  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{formatPrice(sumToPay)}</span>
      </TotalStyled>
    </Header>
  );
};

export default Total;

const TotalStyled = styled.div`
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
