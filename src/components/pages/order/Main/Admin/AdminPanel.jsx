import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { tabsConfig, getTabSelected } from "./tabsConfig";
import AddForm from "./AddForm/AddForm";

const AdminPanel = () => {
  const { currentTabSelected, setCurrentTabSelected } =
    useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  const displayTabSelected = () => {
    switch (currentTabSelected) {
      case "add":
        return <AddForm />;
      case "edit":
        return <div>edit</div>;
      default:
        return <AddForm />;
    }
  };

  return (
    // <AdminPanelStyled>{tabSelected && tabSelected.label}</AdminPanelStyled>
    <AdminPanelStyled>{displayTabSelected()}</AdminPanelStyled>
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
