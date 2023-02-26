import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <nav id="navbar">
        <div class="nav-header">
            <div class="nav-title">
                <span>Coding </span>
                <span class="title">Addict</span>
            </div>
            <button data-nav-toggle class="btn"></button>
        </div>
        <div data-nav-content class="sidenav nav-content">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </div>
        <div data-nav-icons class="sidenav nav-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
    </nav>
  )
}

export default App
