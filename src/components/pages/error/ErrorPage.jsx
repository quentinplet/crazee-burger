import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>ErrorPage</h1>
      <Link to="/">
        <button>Retour à l'accueil</button>
      </Link>
    </>
  );
};

export default Error;
