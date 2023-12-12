import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../ToggleButton";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../../../theme";
import { ToastContainer } from "react-toastify";

const NavbarRightSide = ({ userName }) => {
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
      />
      <Profile userName={userName} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
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

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
