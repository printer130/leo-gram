import React from 'react'
import Contexte from '../Context'
import { Form } from '../components/Form'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegister = () => {
  return <Contexte.Consumer>
    {
      ({ activateAuth }) => {
        return (<>
          <RegisterMutation>

            {
              (register, { data, loading, error }) => {
                const activateAuthSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  console.log("[]", data)
                  register({ variables }).then(response => {
                    const { data: { signup } } = response
                    activateAuth(signup)
                  })
                }
                const errorMsg = error && 'El usuario ya existe'

                return <Form
                  disabled={loading}
                  error={errorMsg}
                  activateAuth={activateAuthSubmit}
                  textButton='Register'
                  title='Register' />
              }
            }
          </RegisterMutation>

          <LoginMutation>
            {
              (loginMutation, { loading, data, error }) => {

                const activateLoginSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  loginMutation({ variables }).then(response => {
                    const { data: { login } } = response
                    console.log(login)
                    activateAuth(login)
                  })
                }
                const errorMsg = error && 'Email o contraseña invalido'
                return <Form
                  disabled={loading}
                  error={errorMsg}
                  activateAuth={activateLoginSubmit}
                  textButton='Login'
                  title='Login' />
              }
            }
          </LoginMutation>
        </>
        )
      }
    }
  </Contexte.Consumer>
}
