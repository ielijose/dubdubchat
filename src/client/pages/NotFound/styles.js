import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Div = styled.div`
  height: calc(100vh - 60px);
`;

export const Img = styled.img`
  ${fadeIn()}

  height: 100%;
  object-fit: cover;
  top: 0;
  width: 100%;
`;

export const TextContainer = styled.article`
  position: absolute;
  top: 80%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Text = styled.h3`
  display: inline;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 6px;
  border-radius: 4px;
  font-size: 32px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.25s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 640px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
