import styled from 'styled-components'
import { Link } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  /* align-items: center; */
  align-content: center;
  background: #fcfcfc;
  border-top: 1px solid #ffcc55;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 999; 
`

export const A = styled(Link)`
  /* align-items: center; */
  display: flex;
  align-items: center;
  color: #889;
  height: 100%;
  font-weight: 600;
  letter-spacing: 1px;
  justify-content: center;
  text-decoration: none;
  &[aria-current]{
    color: #000;
  &::after {
    ${fadeIn({ time: '.5s' })};
    content: '~';
    position: absolute;
    bottom: 0;
    font-size: 34px;
    line-height: 20px;
  }
  }
`