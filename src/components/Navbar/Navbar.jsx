import React from 'react'
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  return (
    <nav className="nav">
      <p id='me' onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Nhlakanipho Madlanga</p>

      <div className="nav-link-box">
        <div className="navlinks">
          {!isHome && <Link to="/">Home</Link>}
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
        </div>
          <Button variant="contained" color='primary' onClick={() => navigate('/about')}>Get in Touch</Button>
      </div>
    </nav>
  )
}

export default Navbar
