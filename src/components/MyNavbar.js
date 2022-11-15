import React from 'react'
import './cssFiles/MyNavbar.css'

export default function MyNavbar() {
  return (
    <div className='Navbar'>
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about" aria-current="page">About</a></li>
            <li id="logoutButton"><a href="#logout" aria-current="logout">Logout</a></li>

        </ul>
    </div>
  )
}
