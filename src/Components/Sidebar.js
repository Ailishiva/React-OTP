import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <>
    <Link to={'/'}>Home</Link>
    <Link to={'/Contact'}>Contact App</Link>
    <Link to={'/map'}>Chart And Map</Link>
    </>

  )
}

export default Sidebar