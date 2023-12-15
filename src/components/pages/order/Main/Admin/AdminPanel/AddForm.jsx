import React, { useContext, useState } from "react";
import styled from "styled-components";
import MenuContext from "../../../../../../context/MenuContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";

const AddForm = () => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    imageSource: "",
    price: 0,
  });

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
    setNewProduct({
      name: "",
      imageSource: "",
      price: "",
    });
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
          placeholder="Lien URL d'une image"
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
      <button className="submit-button">
        Ajouter un nouveau produit au menu
      </button>
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

  .submit-button {
    border: 1px solid green;
    grid-area: 4 / 2 / -1 / -1;
    width: 50%;

    cursor: pointer;

    &:hover {
      background-color: #f5f5f7;
    }

    &:active {
      background-color: #f5f5f7;
    }
  }
`;
