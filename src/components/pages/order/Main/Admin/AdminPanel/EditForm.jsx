import React, { useContext, useRef } from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextConfig } from "./InputTextConfig";
import MenuContext from "../../../../../../context/MenuContext";
import { theme } from "../../../../../../theme";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

const EditForm = () => {
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
  } = useContext(MenuContext);

  const inputTexts = getInputTextConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated);
    handleEditProduct(productBeingUpdated);
  };

  return (
    // <EditFormStyled>
    //   <ImagePreview imageSource={productSelected.imageSource} />
    //   <div className="input-fields">
    //     {inputTexts.map((input) => (
    //       <TextInput
    //         key={input.id}
    //         name={input.name}
    //         placeholder={input.placeholder}
    //         value={input.value}
    //         onChange={handleChange}
    //         Icon={input.Icon}
    //         version="minimalist"
    //         ref={input.name === "title" ? titleEditRef : null}
    //       />
    //     ))}
    //     <EditInfoMessage />
    //   </div>
    // </EditFormStyled>
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
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
