import React, { useContext, useState } from "react";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AdminTabs = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    isCollapsed && setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabsConfig(currentTabSelected, isCollapsed);

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
          />
        );
      })}
    </AdminTabsStyled>
  );
};

export default AdminTabs;

const AdminTabsStyled = styled.div`
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
