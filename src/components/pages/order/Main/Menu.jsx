import React from "react";
import styled from "styled-components";
import { fakeMenu1 } from "../../../../fakeData/fakeMenu";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "./Card";

const Menu = () => {
  const listItem = fakeMenu2.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return <MenuStyled>{listItem}</MenuStyled>;
};

export default Menu;

const MenuStyled = styled.div`
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
`;
