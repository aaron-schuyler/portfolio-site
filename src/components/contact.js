import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faInstagramSquare, faLinkedin, faGithubSquare, faMedium } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div className='contact'>
      <a className='icon' href='https://www.linkedin.com/in/aaron-schuyler/'><FontAwesomeIcon icon={faLinkedin} /></a>
      <a className='icon' href='mailto:hello@aaronschuyler.com'><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
      <a className='icon' href='tel:8645013156'><FontAwesomeIcon icon={faPhoneSquare} /></a>
      <a className='icon' href='https://www.instagram.com/aaron_schuyler/'><FontAwesomeIcon icon={faInstagramSquare} /></a>
      <a className='icon' href='https://github.com/aaron-schuyler'><FontAwesomeIcon icon={faGithubSquare} /></a>
      <a className='icon' href='https://medium.com/@aaron_schuyler'><FontAwesomeIcon icon={faMedium} /></a>
    </div>
  )
}
