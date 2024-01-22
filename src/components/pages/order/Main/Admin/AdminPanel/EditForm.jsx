import React, { useContext } from "react";
import MenuContext from "../../../../../../context/MenuContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

const EditForm = () => {
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
  } = useContext(MenuContext);

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
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
};

export default EditForm;
