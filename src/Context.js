import React, { useState, createContext } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('jwtToken')
  })

  const value = {
    isAuth,
    activateAuth: (jwtToken) => {
      setIsAuth(true)
      window.sessionStorage.setItem('jwtToken', jwtToken)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}


export default {
  Provider,
  Consumer: Context.Consumer
}