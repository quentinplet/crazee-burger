import React from "react";
import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <div>
      <h1>OrderPage</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
};

export default OrderPage;
