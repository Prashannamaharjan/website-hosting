import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logg.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav>
      <img className="navlogo" src={logo} alt="Logo" />
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>
      <ul className={menuOpen ? 'show' : ''}>
        <li>
          <Link 
            to="home-container" 
            smooth={true}  
            offset={-260}  
            duration={500}
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true}  
            offset={-260}  
            duration={500}
            onClick={handleLinkClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="project" 
            smooth={true}  
            offset={-260}  
            duration={500}
            onClick={handleLinkClick}
          >
            Photo & Project
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true}  
            offset={-260}  
            duration={500}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>  
  )
}

export default Navbar