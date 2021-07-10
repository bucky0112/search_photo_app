import React, { useState } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

function App() {
  const [state, setState] = useState({ images: [] })

  const randomPage = (max) => {
    return Math.floor(Math.random() * max)
  }

  const onSearchSubmit = async (input) => {
    const res = await unsplash.get('/search/photos', {
      params: {
        query: input,
        page: randomPage(20)
      }
    })
    setState({ images: res.data.results })
  }

  return (
    <div className='ui container' style={{ marginTop: 20 }}>
      <SearchBar handleSubmit={onSearchSubmit} />
      <ImageList images={state.images} />
    </div>
  )
}

export default App
