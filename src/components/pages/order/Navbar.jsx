import React from "react";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

const Navbar = ({ userName }) => {
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <NavbarRightSide userName={userName} />
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  .left-side {
    background: pink;
  }
`;
