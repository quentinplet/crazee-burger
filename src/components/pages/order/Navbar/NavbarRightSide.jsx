import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const NavbarRightSide = ({ userName }) => {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin Button</div> */}
      <Profile userName={userName} />
    </NavbarRightSideStyled>
  );
};

export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
  background: white;
  font-family: "Open Sans", sans-serif;

  display: flex;
  align-items: center;
  margin-right: 50px;

  .admin-button {
    background: lightblue;
  }
`;
