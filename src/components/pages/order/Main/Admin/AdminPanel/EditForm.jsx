import React, { useContext, useState } from "react";
import MenuContext from "../../../../../../context/MenuContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";
import OrderContext from "../../../../../../context/OrderContext";
import { SavingMessage } from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

const EditForm = () => {
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
  } = useContext(MenuContext);

  const { userName } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated);
    handleEditProduct(userName, productBeingUpdated);
  };

  const handleOnFocus = (event) => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocus(inputValueOnFocus);
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  );
};

export default EditForm;
