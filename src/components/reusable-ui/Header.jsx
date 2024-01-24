import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Header = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

export default Header;

const HeaderStyled = styled.div`
  /* border: 1px solid red; */
  background: ${theme.colors.background_dark};
  height: 70px;
  padding: 0px 16px;
`;
