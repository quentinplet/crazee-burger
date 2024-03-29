import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../../../theme";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../../reusable-ui/Button";
import { authenticateUser } from "../../../api/user";
import Welcome from "./Welcome";

const LoginForm = () => {
  const [username, setUserName] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userReceived = await authenticateUser(username);
    if (!userReceived) return alert("Utilisateur non trouvé");
    setUserName("");
    navigate(`/order/${userReceived.username}`);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div className="inputForm-container">
        <TextInput
          value={username}
          onChange={handleChange}
          Icon={<BsPersonCircle />}
          placeholder={"Entrez votre prénom"}
          required
          className="input-login"
          version="normal"
        />
        <Button label={"Accéder à mon espace"} Icon={<IoChevronForward />} />
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
