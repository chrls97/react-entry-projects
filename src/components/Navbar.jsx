import React from 'react';
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();
  
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul>
        <NavLink to='/'><li >Home</li></NavLink>
        <NavLink to='/products'><li >Products</li></NavLink>
        <NavLink to='/about'><li >About Us</li></NavLink>
        <NavLink to='/contact'><li >Contact</li></NavLink>
        <NavLink to='/jobs'><li >Jobs</li></NavLink>
      </ul>
      <button onClick={()=> navigate('/')}>Get Started</button>
      
    </div>
  )
}

export default Navbar
