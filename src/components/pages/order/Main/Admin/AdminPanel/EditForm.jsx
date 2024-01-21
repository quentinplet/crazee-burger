import React from "react";
import styled from "styled-components";
import EditEmptyMessage from "./EditEmptyMessage";

const EditForm = () => {
  return (
    <EditFormStyled>
      <EditEmptyMessage />
    </EditFormStyled>
  );
};

export default EditForm;

const EditFormStyled = styled.div``;
