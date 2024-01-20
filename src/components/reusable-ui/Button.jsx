import styled, { css } from "styled-components";
import { theme } from "../../theme";

const Button = ({ label, Icon, className, onClick, version = "primary" }) => {
  return (
    <ButtonStyled className={className} onClick={onClick} version={version}>
      <span>{label}</span>
      {Icon && <div className="icon">{Icon}</div>}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  border-radius: ${theme.borderRadius.round};
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  line-height: 1;
  color: ${theme.colors.white};

  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.bold};
    line-height: ${theme.fonts.size.SM};
    text-align: center;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }

  ${({ version }) => extraStyle[version]};
`;

const extraPrimaryStyle = css`
  border: 1px solid ${theme.colors.primary};
  background: ${theme.colors.primary};
  width: 100%;
  height: 53px;
  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  &&:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
`;

const extraSuccessStyle = css`
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  height: 100%;
  padding: 10px 30px;
  font-weight: ${theme.fonts.weights.semiBold};
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const extraStyle = {
  primary: extraPrimaryStyle,
  success: extraSuccessStyle,
};
