import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    if (name === "") {
      alert("Please fill in this field");
      return;
    }
    alert(`Bonjour ${name} !`);
    setName("");
  };

  return (
    <>
      <h1>Bienvenue chez nous ! </h1>
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entre votre prénom..."
        // onChange={(e) => handleChange(e)}
        onChange={handleChange}
        value={name}
      />{" "}
      <span>
        <button onClick={handleClick}>Accédez à votre espace</button>
      </span>
    </>
  );
};

export default Login;
