import { css, keyframes } from 'styled-components';
/* fade in */

const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
}
to {
  filter: blur(0);
  opacity: 1;
}
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

/* slide top */
const slideTopKeyframes = keyframes`
from {
  filter: blur(10px);
  opacity: 0;
  transform: translateY(100px);
}
to {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0px);
}
`;

export const slideTop = ({ time = '0.5s' } = {}) => css`
  animation: ${time} ${slideTopKeyframes} cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
