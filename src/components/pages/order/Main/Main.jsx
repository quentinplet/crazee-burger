import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

const Main = () => {
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <Menu />
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  /* height: calc(95vh - 10vh); */
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  //this code wiil be use for the basket
  /* grid-template-columns: 10% 90%; */

  /* .basket {
    background: pink;
  } */
`;
