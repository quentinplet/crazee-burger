import React, { useContext, useState } from "react";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

const AdminTabs = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    if (tabSelected === "chevronUpDown") setIsCollapsed(!isCollapsed);
    else {
      isCollapsed && setIsCollapsed(false);
      setCurrentTabSelected(tabSelected);
    }
  };

  const tabs = getTabsConfig(currentTabSelected, isCollapsed);

  return (
    <AdminTabsStyled>
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => selectTab(tab.index)}
            className={tab.className}
          />
        );
      })}
    </AdminTabsStyled>
  );
};

export default AdminTabs;

const AdminTabsStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
