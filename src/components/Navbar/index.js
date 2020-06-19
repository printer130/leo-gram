import React from 'react'
import { Nav, A } from './styles'
import { MdHome, MdFavoriteBorder, MdPermIdentity } from 'react-icons/md'

export const Navbar = () => {
  return (
    <Nav>
      <A to='/'><MdHome size='32px' /></A>
      <A to='/favoritos'><MdFavoriteBorder size='32px' /></A>
      <A to='/login'><MdPermIdentity size='32px' /></A>
    </Nav>
  )
}

