import styled from "styled-components";

const Input = ({ value, onChange, Icon, ...restProps }) => {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div`
  /* border: 1px solid red; */
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 18px 24px;
  gap: 12px;
  margin: 18px auto;

  .icon {
    font-size: 15px;
    color: #747b91;
  }

  input {
    border: none;
    font-size: 15px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 17px;
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #d3d3d3;
    background-color: white;
  }
`;
