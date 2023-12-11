import React from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Product from "./Product";
import { useState } from "react";
import { theme } from "../../../../theme";

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);

  const listProduct = menu.map((produit) => {
    return (
      <Product
        key={produit.id}
        title={produit.title}
        imageSource={produit.imageSource}
        price={produit.price}
      />
    );
  });

  return <MenuStyled>{listProduct}</MenuStyled>;
};

export default Menu;

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

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
