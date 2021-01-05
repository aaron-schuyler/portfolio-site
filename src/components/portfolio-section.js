import React from 'react'

const techProjects = [
  { title: 'Macros', description: 'Macros is a diet and fitness tracking app built primarily with Ruby on Rails.', img: '../macros-thumb.png', link: 'https://aaronschuyler-macros.herokuapp.com/days/2020-10-23', github: 'https://github.com/aaron-schuyler/macros', tech: ['Ruby on Rails', 'Javascript']},
  { title: 'Opus', description: 'Opus is a writing app with support for various rich text formatting built in vanilla Javascript and a Rails API backend.', img: '../opus-thumb.png', link: 'https://www.opus.aaronschuyler.com', github: 'https://github.com/aaron-schuyler/opus', tech: ['Ruby on Rails', 'Javascript']},
  { title: 'Togethr', description: 'Togethr is a mutual aid request platform that is built in React with a Rails API backend, it uses JWT for authentication.', img: '../togethr-thumb.png', link: 'https://inspiring-kirch-11050f.netlify.app/tickets', github: 'https://github.com/aaron-schuyler/togethr', tech: ['React', 'Redux', 'Ruby on Rails', 'Javascript']},
  {title: 'Greenville Journal', description: 'Greenville Journal is a local news publication in South Carolina'}
]

export default function PortfolioSection() {
  const renderPortfolioProjects = (projects) => {
    return projects.map((project, index) => {
      return (
        <article key={index}>
          <img src={project.img} alt='portfolio project thumbnail' />
          <a className='link' href={project.link}><h3>{project.title}</h3></a>
          <p>{project.description}</p>
          {project.github && <span><a className='link' href={project.github}>Github</a> | <a className='link' href={project.link}>Demo</a></span> }
          {!project.github && <span><a className='link' href={project.link}>Visit Site</a></span> }
        </article>
      )
    })
  }
  return (
    <div className='portfolio section'>
      <h2>My Portfolio</h2>
        <div className='posts'>
          {renderPortfolioProjects(techProjects)}
        </div>
        <a href='https://github.com/aaron-schuyler' className='see-more'>Go To Github</a>
    </div>
  )
}
