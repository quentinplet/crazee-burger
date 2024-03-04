import React, { useContext } from "react";
import MenuContext from "../../../../../../context/MenuContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";
import OrderContext from "../../../../../../context/OrderContext";

const EditForm = () => {
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
  } = useContext(MenuContext);

  const { userName } = useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated);
    handleEditProduct(userName, productBeingUpdated);
  };

  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
};

export default EditForm;
