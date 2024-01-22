import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

const EditInfoMessage = () => {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit du menu pour le modifier <span>en temps réel</span>
    </EditInfoMessageStyled>
  );
};

export default EditInfoMessage;

const EditInfoMessageStyled = styled.div`
  font-family: "Open Sans", sans-serif;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.regular};
  /* margin-top: 15px; */

  span {
    text-decoration: underline;
  }
`;
