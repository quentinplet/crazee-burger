import React, { useContext, useState } from "react";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";

const AdminTabs = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setisAddSelected,
    isEditSelected,
    setisEditSelected,
  } = useContext(OrderContext);

  const selectAddTab = () => {
    isCollapsed && setIsCollapsed(false);
    setisAddSelected(true);
    setisEditSelected(false);
  };

  const selectEditTab = () => {
    isCollapsed && setIsCollapsed(false);
    setisEditSelected(true);
    setisAddSelected(false);
  };
  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={selectAddTab}
        className={isAddSelected ? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={selectEditTab}
        className={isEditSelected ? "is-active" : ""}
      />
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
