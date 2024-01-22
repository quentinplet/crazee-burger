import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "../tabsConfig";
import MenuContext from "../../../../../../context/MenuContext";

const AdminPanel = () => {
  const { currentTabSelected } = useContext(OrderContext);
  const { productSelected } = useContext(MenuContext);

  const hasAlreadyBeenClicked = productSelected.id;

  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.content}</AdminPanelStyled>
  );
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  border: 1px solid blue;
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
`;
