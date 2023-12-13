import React, { useContext } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../ToggleButton";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";
import OrderContext from "../../../../context/OrderContext";

const NavbarRightSide = () => {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
        isChecked={isModeAdmin}
      />
      <Profile />
      <ToastAdmin />
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
`;
