import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";
import { colors } from "../../styles/colors";

export const Article = styled.article`
  min-height: 200px;
  position: relative;
  width: 20%;

  transition: all 0.25s ease-in-out;

  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 33.33333333334%;
  }

  @media (max-width: 640px) {
    min-height: 150px;
  }
  @media (max-width: 480px) {
    min-height: 100px;
  }
  overflow: hidden;
`;

export const ImageHover = styled.div`
  background-color: ${colors.green};
  height: 100%;
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease;
  width: 100%;
  z-index: 2;
`;

export const ImgWrapper = styled.div`
  border: 0px dotted ${colors.blue};
  cursor: pointer;
  display: block;
  height: 100%;
  transition: all 0.15s ease-in-out;
  transition: transform 0.2s ease-in-out;

  width: 100%;
  &:hover ${Img} {
    transform: scale(1.1);
  }

  ${props =>
    props.selected &&
    css`
      border: 3px solid ${colors.green};

      opacity: 0.9;

      ${ImageHover} {
        opacity: 0.6;
      }
    `}
`;

export const Img = styled.img`
  ${fadeIn()}

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  height: 100%;
  object-fit: cover;
  top: 0;
  width: 100%;
`;

export const Title = styled.span`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  bottom: 0px;
  padding: 3px;
`;
