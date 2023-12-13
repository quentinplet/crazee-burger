import styled from "styled-components";
import { theme } from "../../theme";

const TextInput = ({ value, onChange, Icon, ...restProps }) => {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </InputStyled>
  );
};

export default TextInput;

const InputStyled = styled.div`
  /* border: 1px solid red; */
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;
  gap: 12px;
  margin: 18px auto;

  .icon {
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.greyMedium};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.regular};
    font-family: Arial, Helvetica, sans-serif;
    line-height: 17px;
    width: 100%;
    color: ${theme.colors.dark};
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: ${theme.colors.greyMedium};
    background-color: ${theme.colors.white};
  }
`;
