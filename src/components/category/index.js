import React from 'react'
import { A, Image } from './styles'

const IMG = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = IMG, path, emoji = '?' }) => {
  return (
    <A href={path}>
      <Image src={cover} alt="Logo" />
      {emoji}
    </A>
  )
}