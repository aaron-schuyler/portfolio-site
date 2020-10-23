import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css'
import AboutSection from './components/about-section.js'
import SkillsSection from './components/skills-section.js'
import PortfolioSection from './components/portfolio-section.js'
import BlogSection from './components/blog-section.js'
import Divider from './components/divider.js'

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <div className='site-logo'>
          <h1>
            <span className='yellow'>A</span>
            <span className='green'>a</span>
            <span className='blue'>r</span>
            <span className='purple'>o</span>
            <span className='pink'>n</span>
            <span> </span>
            <span className='red'>S</span>
            <span className='orange'>c</span>
            <span className='yellow'>h</span>
            <span className='green'>u</span>
            <span className='blue'>y</span>
            <span className='purple'>l</span>
            <span className='pink'>e</span>
            <span className='red'>r</span>
            </h1>
        </div>
        <div className='nav'>

        </div>
      </header>
      <Divider />
      <div className='main'>
        <AboutSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <PortfolioSection />
        <Divider />
        <BlogSection />
      </div>
    </div>
  )
}

export default App
