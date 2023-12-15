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
    <AddFormStyled>
      <div className="image-container">
        <img src={product.imageSource} alt={product.name} />
      </div>
      <form action="submit" className="input-fields" onSubmit={handleSubmit}>
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
        {/* <input
          type="text"
          placeholder="Prix"
          className="product-price"
          value={product.price}
          onChange={(event) => handleChange("price", event)}
        /> */}
        <TextInput
          value={product.price}
          onChange={(event) => handleChange("price", event)}
          Icon={<BsPersonCircle className="icon" />}
          placeholder={"Prix"}
          required
          className="text-input"
        />
        <div className="submit-button">
          <input type="submit" value="Ajouter un nouveau produit au menu" />
        </div>
      </form>
    </AddFormStyled>
  );
};

export default AddForm;

const AddFormStyled = styled.div`
  border: 1px solid black;
  margin-top: 31px;
  margin-left: 71px;
  width: 880px;
  display: grid;
  grid-template-columns: 215px 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;

  .image-container {
    border: 1px solid red;
    grid-area: 1 / 1 / span 3 / span 1;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .input-fields {
    border: 1px solid blue;
    grid-area: 1 / 2 / span 4 / span 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;

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
`;
