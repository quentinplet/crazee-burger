import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ userName }) => {
  return (
    <NavbarStyled>
      navbar
      <h1>Bonjour {userName} </h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
`;
