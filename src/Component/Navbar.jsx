import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.scss'

const Navbar = ({ text = "Feedback UI" }) => {
  const navigate = useNavigate()

  return (
    <header className="navbar-header">
      <div className="container">
        <h3 className="logo" onClick={() => navigate('/')}>
          {text}
        </h3>
        
        <nav className="nav-links">
          <NavLink 
            to='/' 
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Home
          </NavLink>
          
          <NavLink 
            to='/about' 
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            About
          </NavLink>
          
          <NavLink 
            to='/contact' 
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar