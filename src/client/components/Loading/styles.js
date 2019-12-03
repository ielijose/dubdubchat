import styled from "styled-components";

export const Spinner = styled.div`
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Svg = styled.svg`
  margin: auto auto;
  display: block;
  width: 80px;
  margin-top: calc((100vh / 2) - 40px);
`;
