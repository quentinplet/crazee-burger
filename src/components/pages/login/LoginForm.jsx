import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
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
      <div className="inputForm-container">
        <div className="input-with-icon">
          <BsPersonCircle className="icon" />
          <input
            type="text"
            placeholder="Entrez votre prénom..."
            onChange={handleChange}
            value={inputValue}
            required
          />
        </div>
        <button className="button-with-icon">
          <span>Accéder à mon espace</span>
          <IoChevronForward className="icon" />
        </button>
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
  }

  .input-with-icon {
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

    &&::placeholder {
      color: #d3d3d3;
      background: white;
    }
  }

  .button-with-icon {
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
  }
`;

/* 
button {
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position : relative;
  white-space: nowrap;
  text-decoration: none;
  line height: 1;

  padding: 18px 24 px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: #f56a2c;
  border: 1px solid #f56a2c;

  &:hover:not(:disabled) { 
    background-color: white;
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
    transition: all 0.2s ease-in-out; 
  }   

  &:active{
    color: white;
    background-color: #f56a2c;
    border: 1px solid #f56a2c;
  }

  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }

*/
