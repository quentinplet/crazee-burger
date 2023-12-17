import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

const ImagePreview = ({ imageSource, title }) => {
  return (
    <ImagePreviewStyled className="image-preview">
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div className="empty-image">Aucune Image</div>
      )}
    </ImagePreviewStyled>
  );
};

export default ImagePreview;

const ImagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
    object-position: center;
    width: 150px;
    height: 150px;
  }

  .empty-image {
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.greyLight};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
  }
`;
