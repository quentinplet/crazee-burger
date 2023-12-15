import React, { useContext, useState } from "react";
import styled from "styled-components";
import MenuContext from "../../../../../../context/MenuContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

const EMPTY_PRODUCT = {
  id: "",
  name: "",
  imageSource: "",
  price: 0,
};

const AddForm = () => {
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.name} />
        ) : (
          <div>Aucune Image</div>
        )}
      </div>
      <div className="input-fields">
        <input
          type="text"
          name="name"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageSource"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Prix"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
        />
        {/* <TextInput
          value={product.price}
          onChange={(event) => handleChange("price", event)}
          Icon={<BsPersonCircle className="icon" />}
          placeholder={"Prix"}
          required
          className="text-input"
        /> */}
      </div>
      <div className="submit">
        <button className="submit-button">
          Ajouter un nouveau produit au menu
        </button>
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck />
            <span>Ajouté avec succés</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
};

export default AddForm;

const AddFormStyled = styled.form`
  border: 1px solid black;
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;

  .image-preview {
    border: 1px solid red;
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-preview img {
    object-fit: cover;
    object-position: center;
    width: 100px;
    height: 100px;
  }

  .input-fields {
    border: 1px solid blue;
    grid-area: 1 / 2 / 4 / 3;
    gap: 8px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);

    input {
      padding: 8px 16px 8px 24px;
      width: 100%;
    }

    .text-input {
      /* padding: 8px 16px 8px 24px; */
      padding: 0;
      margin: 0;
      border-radius: 5px;
      width: 100%;
      background-color: #f5f5f7;

      input {
        padding: 8px 16px 8px 24px;
        width: 100%;
        background-color: #f5f5f7;
      }

      input::placeholder {
        background-color: #f5f5f7;
      }
    }
  }

  .submit {
    border: 1px solid green;
    grid-area: 4 / 2 / -1 / -1;
    display: flex;
    align-items: center;

    .submit-button {
      cursor: pointer;

      width: 50%;

      &:hover {
        background-color: #f5f5f7;
      }

      &:active {
        background-color: #f5f5f7;
      }
    }

    .submit-message {
      border: 1px solid red;
    }
  }
`;
