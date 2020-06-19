import React, { useState, useEffect, useRef } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Boton } from '../Boton'
import { ToggleLikeMutation } from '../../container/ToggleMutation'
import { Link } from '@reach/router'

const DEFAULTIMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'
export const PhotoCard = ({ id, likes = 0, liked, src = DEFAULTIMAGE }) => {

  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleBoton = () => {
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
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