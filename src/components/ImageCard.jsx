import React, { useRef, useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Img = styled.img`
  width: 250px;
  grid-row-end: span 2;
`

const ImageCard = (props) => {
  const { src, alt } = props
  const imageRef = useRef()
  const [state, setState] = useState({ spans: 0 })

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans)
  }, [])

  const setSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    setState({ spans })
  }

  return (
    <div style={{ gridRowEnd: `span ${state.spans}` }}>
      <Img className='ui rounded image' ref={imageRef} src={src} alt={alt} />
    </div>
  )
}

export default ImageCard
