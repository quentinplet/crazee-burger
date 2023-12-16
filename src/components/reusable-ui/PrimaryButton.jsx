import styled from "styled-components";
import { theme } from "../../theme";

const PrimaryButton = ({ label, Icon, className, onClick }) => {
  return (
    <PrimaryButtonStyled className={className} onClick={onClick}>
      <span>{label}</span>
      {Icon && <div className="icon">{Icon}</div>}
    </PrimaryButtonStyled>
  );
};

export default PrimaryButton;

const PrimaryButtonStyled = styled.button`
  width: 100%;
  height: 53px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  background: ${theme.colors.primary};
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  line-height: 1;
  /* padding: 18px 106px; */
  color: ${theme.colors.white};

  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.bold};
    line-height: ${theme.fonts.size.SM};
    text-align: center;
  }

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
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
`;
