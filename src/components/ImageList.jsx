import React from 'react'
import ImageCard from './ImageCard'
import styled from '@emotion/styled'

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
`

const ImageList = (props) => {
  const { images } = props

  const renderImage = images.map(({ urls, description, id }) => {
    return <ImageCard src={urls.regular} alt={description} key={id} />
  })

  return <List>{renderImage}</List>
}

export default ImageList
