import React, { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import { theme } from "../../../../../theme";
import MenuContext from "../../../../../context/MenuContext";
import MenuEmpty from "./MenuEmpty";
import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import { findArrayElementById, isEmptyArray } from "../../../../../utils/array";

const DEFAULT_IMAGE = "/images/coming-soon.png";

const Menu = ({ menu }) => {
  const {
    handleDeleteProduct,
    handleAddProductToBasket,
    handleDeleteProductFromBasket,
    productSelected,
    setProductSelected,
    titleEditRef,
    handleProductSelected,
  } = useContext(MenuContext);

  const { isModeAdmin } = useContext(OrderContext);

  const handleClickPropagation = (event) => {
    event.stopPropagation();
  };

  const handleCardDelete = (event, idProductToDelete) => {
    handleClickPropagation(event);
    handleDeleteProduct(idProductToDelete);
    handleDeleteProductFromBasket(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
    titleEditRef.current && titleEditRef.current.focus();
  };

  const handleAddButton = (event, id) => {
    handleClickPropagation(event);
    const productToAddToBasket = findArrayElementById(menu, id);
    handleAddProductToBasket(productToAddToBasket);
  };

  const checkIfProductIsSelected = (idProductInMenu, idProductClickedOn) => {
    return idProductInMenu === idProductClickedOn;
  };

  const listCard = menu.map(({ id, title, price, imageSource }) => {
    return (
      <Card
        key={id}
        leftDescription={formatPrice(price)}
        title={title}
        imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
        onDelete={(event) => handleCardDelete(event, id)}
        hasDeleteButton={isModeAdmin}
        // className={isModeAdmin && "admin"}
        onClick={() => handleProductSelected(id)}
        isHoverable={isModeAdmin}
        isSelected={checkIfProductIsSelected(id, productSelected.id)}
        handleClickPropagation={(event) => handleClickPropagation(event)}
        onAdd={(event) => handleAddButton(event, id)}
      />
    );
  });

  const displayMenu = isEmptyArray(menu) ? <MenuEmpty /> : listCard;

  return <MenuStyled>{displayMenu}</MenuStyled>;
};

export default Menu;

const MenuStyled = styled.div`
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

  /* .admin {
    &:hover {
      border: 1px solid ${theme.colors.primary};
      cursor: pointer;
    }
    &:active {
      background-color: ${theme.colors.primary};
    }
  } */
`;
