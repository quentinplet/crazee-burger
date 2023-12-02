import styled from "styled-components";

const Logo = () => {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="src/assets/logo-orange.png" alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
};

export default Logo;

const LogoStyled = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  color: white;
  margin: 0;
  padding: 0;
  /* transform: scale(2.5); */

  h1 {
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 110px;
    font-weight: 700;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
    margin: 0;
    padding: 0;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 150px;
    width: 200px;
    margin: 0 20px;
  }
`;
