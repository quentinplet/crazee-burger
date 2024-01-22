import React, { useContext } from "react";
import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import OrderContext from "../../../../../context/OrderContext";

const Admin = () => {
  const { isCollapsed } = useContext(OrderContext);
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
};

export default Admin;

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
