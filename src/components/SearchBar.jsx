import React, { useState } from 'react'

const SearchBar = (props) => {
  const { handleSubmit } = props
  const [state, setState] = useState({ inputText: '' })

  const handleInput = (e) => {
    setState({ inputText: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmit(state.inputText)
  }

  return (
    <div className='ui segment'>
      <form className='ui form' onSubmit={handleFormSubmit}>
        <div className='field'>
          <label htmlFor='search'>Search</label>
          <input
            id='search'
            type='text'
            value={state.inputText}
            onChange={handleInput}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
