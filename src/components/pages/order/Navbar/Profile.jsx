import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../../theme";

const Profile = () => {
  const { userName } = useParams();
  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <b>{userName}</b>{" "}
        </p>
        <Link to="/">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle className="icon" />
      </div>
    </ProfileStyled>
  );
};

export default Profile;

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  padding-left: 50px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      color: ${theme.colors.greyBlue};
      margin: 0;

      b {
        color: ${theme.colors.primary};
      }
    }

    a {
      text-decoration: none;

      .description {
        &:hover {
          cursor: pointer;
          color: ${theme.colors.greyDark};
          text-decoration: underline;
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    height: auto;
    display: flex;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
