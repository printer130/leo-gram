import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
const renderProp = ({ loading, error, data = {} }) => {

  if (loading) return 'Cargandoo...'
  if (error) return 'Error En el SErvidoR'
  const { photo = {} } = data

  // console.log(data)

  // console.log(photo)
  return <PhotoCard {...photo} />
}

export const DetailCardQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {renderProp}
  </Query>
)

