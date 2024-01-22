import React, { useContext, useState } from "react";
import styled from "styled-components";
import MenuContext from "../../../../../../context/MenuContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextConfig } from "./InputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

const AddForm = () => {
  //State
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { newProduct, setNewProduct } = useContext(MenuContext);

  const { handleAddProduct } = useContext(MenuContext);

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

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  //affichage
  return (
    // <AddFormStyled onSubmit={handleSubmit}>
    //   <ImagePreview
    //     imageSource={newProduct.imageSource}
    //     title={newProduct.title}
    //   />
    //   <div className="input-fields">
    //     {inputTexts.map((input) => (
    //       <TextInput
    //         key={input.id}
    //         {...input}
    //         onChange={handleChange}
    //         version="minimalist"
    //       />
    //     ))}
    //   </div>
    //   <div className="submit">
    //     <Button
    //       label={"Ajouter un nouveau produit au menu"}
    //       version="success"
    //     />
    //     {isSubmitted && <SubmitMessage />}
    //   </div>
    // </AddFormStyled>
    <Form onSubmit={handleSubmit} onChange={handleChange} product={newProduct}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
};

export default AddForm;

const AddFormStyled = styled.form`
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    grid-row-gap: 8px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
  }
`;
