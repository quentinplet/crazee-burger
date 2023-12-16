import styled, { css } from "styled-components";
import { theme } from "../../theme";

const TextInput = ({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...restProps
}) => {
  return (
    <TextInputStyled className={className} version={version}>
      {Icon && <div className="icon">{Icon}</div>}
      <input
        autocomplete="off"
        value={value}
        onChange={onChange}
        type="text"
        {...restProps}
      />
    </TextInputStyled>
  );
};

export default TextInput;

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${theme.borderRadius.round};

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
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
  ${(props) => props.version === "normal" && extraNormalStyle};
  ${(props) => props.version === "minimalist" && extraMinimalistStyle};
`;

const extraNormalStyle = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraMinimalistStyle = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`;
