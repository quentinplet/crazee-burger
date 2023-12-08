import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarRightSide = ({ userName }) => {
  return (
    <NavbarRightSideStyled>
      Right
      <h1>Bonjour {userName} </h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarRightSideStyled>
  );
};

export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
  background: purple;
`;
