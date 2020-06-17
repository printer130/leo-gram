import React, { useState, useEffect, useRef } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Boton } from '../Boton'
import { ToggleLikeMutation } from '../../container/ToggleMutation'

const DEFAULTIMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'
export const PhotoCard = ({ id, likes = 0, src = DEFAULTIMAGE }) => {

  const [show, ref] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={ref}>
      {
        show && <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleBoton = () => {
                  !liked && toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                  setLiked(!liked)
                }
                return <Boton onClick={handleBoton} liked={liked} likes={likes} />
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
}