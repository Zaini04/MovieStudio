import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/NavBar.css"
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-brand'>
            <Link to="/">Movies</Link>
        </div>
        <div className='navbar-links'>
            <Link to="/">Home</Link>
            <Link to="/favorite">Favorites</Link>
        </div>
    </div>

  )
}

export default NavBar