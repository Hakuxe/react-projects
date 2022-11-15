import React from 'react'
import { Link } from 'react-router-dom'

export  function Info() {
  return (
    <div className='flex  flex-col gap-4 '>
      <Link to="/" className='text-blue-400 hover:text-blue-600'> Home </Link>
      <Link to="/form-simple" className='text-blue-400 hover:text-blue-600'> Form simple</Link>
      <Link to="/form-field" className='text-blue-400 hover:text-blue-600'> Form field</Link>
    </div>
  )
}
