import React from "react";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme";

const EditEmptyMessage = () => {
  return (
    <EditEmptyMessageStyled>
      <p className="edit-message">Cliquer sur un produit pour le modifier</p>

      <HiCursorClick className="edit-icon" />
    </EditEmptyMessageStyled>
  );
};

export default EditEmptyMessage;

const EditEmptyMessageStyled = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  column-gap: 9px;
  font-size: 24px;

  .edit-message {
    color: #747b91;
    font-family: ${theme.fonts.family.stylish};
    font-style: normal;
    line-height: normal;
    font-weight: 400;
    width: max-content;
  }

  .edit-icon {
    color: #747b91;
  }
`;
