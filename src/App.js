import React from 'react'
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css'
import SiteLogo from './components/site-logo.js'
import AboutSection from './components/about-section.js'
import SkillsSection from './components/skills-section.js'
import PortfolioSection from './components/portfolio-section.js'
import BlogSection from './components/blog-section.js'
import Divider from './components/divider.js'
import Contact from './components/contact.js'

export default function App() {
  return (
    <div className='app'>
      <header className='header'>
        <SiteLogo />
        <Contact />
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
      <Divider />
      <footer>
        <p>&copy; 2020 | Aaron Schuyler | <a className='link' href='mailto:hello@aaronschuyler.com'>hello@aaronschuyler.com</a></p>
      </footer>
    </div>
  )
}
