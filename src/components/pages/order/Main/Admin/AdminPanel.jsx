import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";

const AdminPanel = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setisAddSelected,
    isEditSelected,
    setisEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  );
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  border: 1px solid blue;
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
