import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
		  id
      categoryId
      src
      likes
      userId
      liked
	  }
  }
`)


const ListOfPhotoCardsComponent = ({ data } = {}) => {
  const { photos = [] } = data
  // console.log(photos)
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}

export const ListOfPhotoCards = getPhotos(ListOfPhotoCardsComponent)