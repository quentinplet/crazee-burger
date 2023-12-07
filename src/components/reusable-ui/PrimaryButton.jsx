import styled from "styled-components";

const PrimaryButton = ({ label, Icon }) => {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
};

export default PrimaryButton;

const PrimaryButtonStyled = styled.button`
  width: 100%;
  border: 1px solid #ff9f1b;
  border-radius: 5px;
  background: #ff9f1b;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  line-height: 1;
  padding: 18px 106px;
  color: white;

  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    text-align: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }

  &:hover:not(:disabled) {
    background-color: white;
    color: #ff9f1b;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  &:active {
    color: white;
    background-color: #f56a2c;
    border: 1px solid #f56a2c;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
