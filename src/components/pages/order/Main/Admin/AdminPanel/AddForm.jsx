import React, { useContext, useState } from "react";
import styled from "styled-components";
import MenuContext from "../../../../../../context/MenuContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";

const AddForm = () => {
  const [product, setProduct] = useState({
    name: "",
    imageSource: "",
    price: "",
  });

  const { handleAddProduct } = useContext(MenuContext);

  const handleChange = (param, event) => {
    setProduct((prevState) => {
      return { ...prevState, [param]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: Date.now(),
      title: product.name,
      imageSource: product.imageSource,
      price: event.target[2].value,
    };
    handleAddProduct(newProduct);
    setProduct({
      name: "",
      imageSource: "",
      price: "",
    });
  };

  //   const handleAddProduct = (product) => {
  //     setProducts((prevState) => {
  //       return { ...prevState, ...product };
  //     });
  //   };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        <img src={product.imageSource} alt={product.name} />
      </div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          className="product-name"
          value={product.name}
          onChange={(event) => handleChange("name", event)}
        />
        <input
          type="text"
          placeholder="Lien URL d'une image"
          className="url-link"
          value={product.imageSource}
          onChange={(event) => handleChange("imageSource", event)}
        />
        <input
          type="text"
          placeholder="Prix"
          className="product-price"
          value={product.price}
          onChange={(event) => handleChange("price", event)}
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
      <div className="submit-button">
        <input type="submit" value="Ajouter un nouveau produit au menu" />
      </div>
    </AddFormStyled>
  );
};

export default AddForm;

const AddFormStyled = styled.form`
  border: 1px solid black;
  width: 880px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;

  .image-preview {
    border: 1px solid red;
    grid-area: 1 / 1 / 4 / 2;
  }

  .image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
  }
`;
