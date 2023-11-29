import React, { useState } from "react";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue} !`);
    setInputValue("");
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous ! </h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
        value={inputValue}
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
};

export default LoginForm;
