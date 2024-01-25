import React, { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import { theme } from "../../../../../theme";
import MenuContext from "../../../../../context/MenuContext";
import MenuEmpty from "./MenuEmpty";
import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

const DEFAULT_IMAGE = "/images/coming-soon.png";

const Menu = ({ menu }) => {
  const {
    handleDeleteProduct,
    handleAddProductToBasket,
    handleDeleteProductFromBasket,
  } = useContext(MenuContext);
  const { isModeAdmin } = useContext(OrderContext);
  const { productSelected, setProductSelected, titleEditRef } =
    useContext(MenuContext);

  const { setIsCollapsed, setCurrentTabSelected } = useContext(OrderContext);

  const handleClick = async (idProductSelected) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");

    const productClickedOn = menu.find(
      (product) => product.id === idProductSelected
    );
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

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
        onClick={() => handleClick(id)}
        isHoverable={isModeAdmin}
        isSelected={checkIfProductIsSelected(id, productSelected.id)}
        handleClickPropagation={(event) => handleClickPropagation(event)}
        handleAddProductToBasket={() => handleAddProductToBasket(id)}
      />
    );
  });

  const displayMenu = menu.length > 0 ? listCard : <MenuEmpty />;

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
