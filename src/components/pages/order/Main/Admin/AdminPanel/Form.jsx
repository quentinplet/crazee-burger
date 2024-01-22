import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextConfig } from "./InputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, isSubmitted, messageTest }, ref) => {
    const inputTexts = getInputTextConfig(product);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              key={input.id}
              {...input}
              onChange={onChange}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
        </div>
        <div className="submit">{messageTest}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
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
