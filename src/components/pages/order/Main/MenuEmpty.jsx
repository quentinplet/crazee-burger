import React, { useContext } from "react";
import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import OrderContext from "../../../../context/OrderContext";
import MenuContext from "../../../../context/MenuContext";

const MenuEmpty = () => {
  const { isModeAdmin } = useContext(OrderContext);
  const { generateNewMenu } = useContext(MenuContext);

  const displayMenuEmpty = () => {
    if (isModeAdmin) {
      return (
        <>
          <p>Le menu est vide ?</p>
          <p>Cliquez ci-dessous pour le réinitialiser</p>
          <PrimaryButton
            className="button"
            label="Générer de nouveaux produits"
            onClick={generateNewMenu}
          />
        </>
      );
    } else {
      return (
        <>
          <p>Victime de notre succès ! :D</p>
          <p>De nouvelles recettes sont en cours de préparation.</p>
          <p>À très vite !</p>
        </>
      );
    }
  };
  return <MenuEmptyStyled>{displayMenuEmpty()}</MenuEmptyStyled>;
};

export default MenuEmpty;

const MenuEmptyStyled = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    color: #747b91;
    text-align: center;
    font-family: Amatic SC;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .button {
    width: auto;
    padding: 19px 25px;
  }
`;
