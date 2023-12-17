import React from "react";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme";
import styled from "styled-components";

const SubmitMessage = () => {
  return (
    <SubmitMessageStyled>
      <FiCheck className="icon" />
      <span className="message">Ajouté avec succès !</span>
    </SubmitMessageStyled>
  );
};

export default SubmitMessage;

const SubmitMessageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  .icon {
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
    vertical-align: middle;
  }
  .message {
    margin-left: 5px;
    color: ${theme.colors.success};
    font-size: ${theme.fonts.size.SM};
  }
`;
