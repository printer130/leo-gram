import styled from 'styled-components'

export const FormStyled = styled.form`
  padding: 16px 0;
`
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .6;
  }
`
export const Button = styled.button`
  background: #ffcc00;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
  opacity: .6;
  }
`

export const H1 = styled.h1`
  font - size: 1.4em;
  font - weight: 500;
  padding: 8px 0;
  color: #161e26;
`

export const Error = styled.span`
  font-size: 14px;
  display: table;
  margin: 0 auto;
  color: red;
  letter-spacing: 1px;
`

export const SVG = styled.svg`
  display: inline-block;
  height: -webkit-fill-available;
`