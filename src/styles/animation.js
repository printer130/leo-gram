import { css, keyframes } from 'styled-components'

export const inkeyframes = keyframes`
  0% {
    filter: blur(5px);
    opacity: 0;
  }
  100%{
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeIn = ({ time = '1s', type = 'ease-in' } = {}) =>
  css`animation: ${time} ${inkeyframes} ${type}`
