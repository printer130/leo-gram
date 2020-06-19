import React from 'react'
import { Router } from '@reach/router'
// import { Category } from './components/category'
import { GlobalStyles } from './styles/GlobalStyles'

import Context from './Context'

import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Favoritos } from './pages/Favoritos'
import { NotRegister } from './pages/NotRegister'
import { Login } from './pages/Login'



export default function App() {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  // const Userlogged = ({ children }) => {
  //   return children({ isAuth: true })
  // }

  return <div>
    <GlobalStyles />
    <Logo />
    <Router>
      <Home path={'/'} />
      <Home path={'/pet/:id'} />
      <Details path={'/detail/:detailId'} />
    </Router >
    <Context.Consumer>
      {
        ({ isAuth }) =>
          isAuth
            ? <Router>
              <Favoritos path='/favoritos' />
              <Login path='/login' />
            </Router>
            : <Router>
              <NotRegister path='/favoritos' />
              <NotRegister path='/login' />
            </Router>
      }
    </Context.Consumer>

    <Navbar />
  </div>

}