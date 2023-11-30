import React from "react";
import { Link, useParams } from "react-router-dom";

const OrderPage = () => {
  const { userName } = useParams();

  return (
    <div>
      <h1>Bonjour {userName} </h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
};

export default OrderPage;
