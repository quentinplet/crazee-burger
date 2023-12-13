import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

const Admin = () => {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
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
