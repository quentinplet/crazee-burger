import React from "react";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";

const Navbar = ({ userName }) => {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide userName={userName} />
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.nav`
  background: white;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 0px 20px;
`;
