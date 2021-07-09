import React, { useState } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'

function App() {
  const [state, setState] = useState({ image: [] })

  const onSearchSubmit = async (input) => {
    const res = await unsplash.get('/search/photos', {
      params: {
        query: input
      }
    })
    setState({ image: res.data.results })
  }

  return (
    <div className='ui container' style={{ marginTop: 20 }}>
      <SearchBar handleSubmit={onSearchSubmit} />
    </div>
  )
}

export default App
