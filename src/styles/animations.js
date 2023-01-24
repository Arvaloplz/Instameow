import { keyframes, css } from 'styled-components'

const fadeInKeyFrame = keyframes`
  from {
    filter:blur(5px);
    opacity:0;
  }
  to {
    filter:blur(0);
    opacity:1;
  }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  // * Para reutilizar el css
  css`
    animation: ${time} ${fadeInKeyFrame} ${type};
  `
