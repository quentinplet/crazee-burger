import React from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import { theme } from "../../../../theme";

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);

  const listCard = menu.map(({ id, title, price, imageSource }) => {
    return (
      <Card
        key={id}
        leftDescription={formatPrice(price)}
        title={title}
        imageSource={imageSource}
      />
    );
  });

  return <MenuStyled>{listCard}</MenuStyled>;
};

export default Menu;

const MenuStyled = styled.div`
  border: 2px solid blue;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  width: 100%;
  margin: 0 auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  /* grid-template-columns: repeat(minmax(auto-fill, 4), minmax(240px, 1fr)); */
  grid-row-gap: 60px;
  grid-column-gap: 60px;
  padding: 50px 50px 150px;
  overflow-y: scroll;
`;
