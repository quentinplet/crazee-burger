import React, { useContext, useState } from "react";
import MenuContext from "../../../../../../context/MenuContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

const AddForm = () => {
  //State
  const { newProduct, setNewProduct } = useContext(MenuContext);
  const { handleAddProduct } = useContext(MenuContext);
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  // comportements (gestionnaire d'évènements)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = crypto.randomUUID();
    const newProductToAdd = {
      ...newProduct,
      id,
    };
    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  //affichage
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} product={newProduct}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
};

export default AddForm;
