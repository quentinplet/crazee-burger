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
  /* height: calc(95vh - 10vh); */
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  //this code wiil be use for the basket
  /* grid-template-columns: 10% 90%; */

  overflow-y: scroll;

  /* .basket {
    background: pink;
  } */
`;
