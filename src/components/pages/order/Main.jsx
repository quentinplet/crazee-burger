import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "./Card";
import { fakeMenu1 } from "../../../fakeData/fakeMenu";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

const Main = () => {
  const menuArray = fakeMenu1;
  const listItem = fakeMenu2.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <MainStyled>
      <div className="gridContainer">{listItem}</div>
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

  .gridContainer {
    width: 100%;
    margin: 0 auto;
    /* border: 1px solid black; */
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    /* grid-template-columns: repeat(minmax(auto-fill, 4), minmax(240px, 1fr)); */
    grid-row-gap: 60px;
    grid-column-gap: 60px;
    padding: 50px 50px 150px;
  }

  .grid-item {
    width: 240px;
    height: 330px;
    background: ${theme.colors.primary};
  }
`;
