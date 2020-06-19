import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'


import Context from './Context'

const client = new ApolloClient({
  uri: 'https://leonardopet1.now.sh/graphql',
  request: ({ setContext }) => {
    const jwt = window.sessionStorage.getItem('jwtToken')

    const authorization = jwt ? `Bearer ${jwt}` : ''
    setContext({
      headers: { authorization }
    })
  },
  onError: error => {
    const { networkError } = error
    // console.log('[NEW][Work]', error)
    if (networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('jwtToken')
      window.location.href = '/'
    }
  }
})

render(
  <Context.Provider >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))