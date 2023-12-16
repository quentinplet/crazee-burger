import styled from "styled-components";
import { theme } from "../../theme";

const TextInput = ({ value, onChange, Icon, className, ...restProps }) => {
  return (
    <InputStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
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

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 0 8px 0 10px;
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
