import React from 'react'
import SearchBar from './SearchBar'

function App() {
  const onSearchSubmit = (input) => {
    console.log(input)
  }

  return (
    <div className='ui container' style={{ marginTop: 20 }}>
      <SearchBar handleSubmit={onSearchSubmit} />
    </div>
  )
}

export default App
