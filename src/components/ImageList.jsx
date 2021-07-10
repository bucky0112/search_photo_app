import React from 'react'

const ImageList = (props) => {
  const { images } = props

  const renderImage = images.map(({ urls, description, id }) => {
    return (
      <img
        className='ui medium rounded image'
        src={urls.regular}
        alt={description}
        key={id}
      ></img>
    )
  })

  return <div>{renderImage}</div>
}

export default ImageList
