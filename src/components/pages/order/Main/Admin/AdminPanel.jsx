import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "./getTabsConfig";

const AdminPanel = () => {
  const { currentTabSelected, setCurrentTabSelected } =
    useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.label}</AdminPanelStyled>;
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  border: 1px solid blue;
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
