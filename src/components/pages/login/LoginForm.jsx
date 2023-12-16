import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../../../theme";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous ! </h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div className="inputForm-container">
        <TextInput
          value={inputValue}
          onChange={handleChange}
          Icon={<BsPersonCircle />}
          placeholder={"Entrez votre prénom"}
          required
          className="input-login"
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward />}
        />
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;

const LoginFormStyled = styled.form`
  /* background: green; */
  text-align: center;
  margin: 0px auto;
  margin-top: 40px;
  max-width: 500px;
  min-width: 400px;
  max-height: 500px;
  min-height: 400px;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC";

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weights.bold};
    line-height: 61px;
    margin: 0;
    margin-bottom: 32px;
  }

  hr {
    width: 400px;
    border: 1px solid ${theme.colors.loginLine};
    background: ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 4}px;
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    line-height: 46px;
  }

  .input-login {
    margin: 18px auto;
  }
`;
