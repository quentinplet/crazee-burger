import React, { useContext, useState } from "react";
import styled from "styled-components";
import MenuContext from "../../../../../../context/MenuContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

const AddForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { newProduct, setNewProduct } = useContext(MenuContext);

  const { handleAddProduct } = useContext(MenuContext);

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

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        <TextInput
          type="text"
          name="title"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          onChange={handleChange}
          Icon={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          type="text"
          name="imageSource"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version="minimalist"
        />
        <TextInput
          type="number"
          name="price"
          placeholder="Prix"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version="minimalist"
        />
      </div>
      <div className="submit">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck className="icon" />
            <span className="message">Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddFormStyled>
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

    .submit-message {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;

      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }
      .message {
        margin-left: 5px;
        color: ${theme.colors.success};
        font-size: ${theme.fonts.size.SM};
      }
    }
  }
`;
