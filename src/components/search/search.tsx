import React from 'react'

 const Search:React.FC  = () => {
  return (
    <div className='border rounded border-stroke shadow-lg p-2 '>
        <input 
            type='text'
            placeholder='pokemon name'
            className='width-[600px]'
        />
    </div>
  )
}

export default Search;

