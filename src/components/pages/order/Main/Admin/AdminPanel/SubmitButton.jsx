import React from "react";
import Button from "../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

const SubmitButton = ({ isSubmitted }) => {
  return (
    <>
      <Button label={"Ajouter un nouveau produit au menu"} version="success" />
      {isSubmitted && <SubmitMessage />}
    </>
  );
};

export default SubmitButton;
