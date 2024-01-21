import React, { useContext } from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextConfig } from "./InputTextConfig";
import Menu from "../../Menu/Menu";
import MenuContext from "../../../../../../context/MenuContext";
import HintMessage from "./HintMessage";
import { useState } from "react";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

const EditForm = () => {
  const { productSelected, setProductSelected, productIsSelected } =
    useContext(MenuContext);

  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT); //state interne à editForm

  const inputTexts = getInputTextConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (productIsSelected) {
      setProductBeingEdited((prevState) => {
        return { ...prevState, [name]: value };
      });
    }
  };

  return (
    <EditFormStyled>
      {/* <HintMessage /> */}

      <ImagePreview imageSource={productSelected.imageSource} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            name={input.name}
            placeholder={input.placeholder}
            value={productSelected[input.name]}
            // value={input.value}
            onChange={handleChange}
            Icon={input.Icon}
            version="minimalist"
          />
        ))}
      </div>
    </EditFormStyled>
  );
};

export default EditForm;

const EditFormStyled = styled.div`
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
`;
