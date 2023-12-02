import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

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
      <div className="inputForm">
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          value={inputValue}
          required
        />
        <button>Accédez à votre espace</button>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;

const LoginFormStyled = styled.form`
  background: green;
  text-align: center;
  margin: 0px auto;
  max-width: 500px;
  min-width: 400px;
  max-height: 500px;
  min-height: 400px;
  padding: 20px;
  font-family: "Amatic SC";

  h1 {
    color: white;
    font-size: 48px;
    font-weight: 700;
    line-height: 61px;
    margin: 0;
    margin-bottom: 32px;
  }

  hr {
    width: 400px;
    border: 1px solid #f56a2c;
    background: #f56a2c;
    margin-bottom: 40px;
  }

  h2 {
    color: white;
    font-size: 36px;
    line-height: 46px;
    margin-bottom: 18px;
  }
`;
