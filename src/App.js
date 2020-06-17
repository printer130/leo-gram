import React from 'react'
// import { Category } from './components/category'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { DetailCardQuery } from './container/DetailCardQuery'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

export default function App() {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)


  return <div>
    <GlobalStyles />
    <Logo />
    {
      detailId
        ? <DetailCardQuery id={detailId} />
        : <Router>
          <Home path={'/'} />
          <Home path={'/pet/:id'} />
        </Router >
    }
  </div>

}