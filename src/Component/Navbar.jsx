import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.scss'

const Navbar = ({ text }) => {
  const navigate = useNavigate()
  const sendTo = () => {
    navigate('/')
  }
  return (
    <header>
      <h3 onClick={sendTo}>{text}</h3>
      <NavLink activeClassName='links' to='/'><button className='button'>Home</button></NavLink>
      <NavLink activeClassName='links' to='/about' ><button className='button'>About</button></NavLink>
      <NavLink activeClassName='links' to='/contact'><button className='button'>Contact</button></NavLink>

      {/* I would like to creat navigation link which can define the active state by some css properties means change in color bgcolor something like that so check that and apply in project */}
    </header>
  )
}

export default Navbar
