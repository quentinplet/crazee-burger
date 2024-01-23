import React from "react";
import styled from "styled-components";
import Header from "../../../../reusable-ui/Header";
import { theme } from "../../../../../theme";

const Footer = () => {
  return (
    <Header>
      <FooterStyled>
        <span>Codé ave ❤️ et React.JS</span>
      </FooterStyled>
    </Header>
  );
};

export default Footer;

const FooterStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${theme.fonts.size.P2};
    font-family: ${theme.fonts.family.stylish}, cursive;
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`;
