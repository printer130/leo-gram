import React, { useState } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { FormStyled, Input, Button, H1, Error } from './styles'
import { LoadingIcon } from './loading'

export const Form = ({ error, activateAuth, title, textButton, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    activateAuth({
      email: email.value,
      password: password.value
    })
  }
  const textoBoton = disabled ? <LoadingIcon /> : textButton

  return <>
    <H1>{title}</H1>
    <FormStyled onSubmit={handleSubmit} disabled={disabled}>
      <Input
        disabled={disabled}
        placeholder='Email'
        value={email.value}
        onChange={email.onChange}
        type="text" />
      <Input
        disabled={disabled}
        placeholder='Password'
        value={password.value}
        onChange={password.onChange}
        type="password" />
      <Button disabled={disabled}>{textoBoton}</Button>
    </FormStyled>
    {error && <Error>{error}</Error>}
  </>
}