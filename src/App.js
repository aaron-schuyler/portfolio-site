import React, {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aaron_schuyler&api_key=on3y0xvh4vpwoa6kcgrjftkvm9ugrneyzpnrfpun')
    .then(res => res.json())
    .then((mediumData) => {
      setBlogPosts(mediumData.items)
      console.log(mediumData.items)
    })
  }, [])
  const renderBlogPosts = () => {
    return blogPosts.map((post) => {
      return (
        <article key={post.guid}>
          <img src={post.thumbnail} />
          <h3>{post.title}</h3>
          <span className='meta'>{post.author} | {post.pubDate}</span>
        </article>
      )
    })
  }
  return (
    <div className='app'>
      <header className='header'>
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
      </header>
      <div className='divider'></div>
      <div className='main'>
        <div className='about section'>
          <div className='col'><img src='../headshot.jpeg' /></div>
          <div className='col'>
            <h2>Hello, My name is Aaron Schuyler.</h2>
            <p>First and foremost, I love to tell stories. I studied film and cinema in school, I make music in my spare time, and I have a background in digital marketing and branding. I believe technology is an integral part of communicating the stories of the 21st century. I believe art, cinema, music, and anything with cultural significance will come to rely even more heavily on technology than they already do over the decades to come.</p><p>I am a combination of self-taught and boot camp taught in several languages and technologies including VueJS, React, JavaScript, TypeScript, NodeJS, Ruby, Rails, and some AWS for good measure. My background is in digital marketing, though I have developed a real passion for technology over the past 5 or so years. I learned HTML and CSS in High School and played around with it ever since. I started freelancing in web development in 2018, teaching myself along the way. I learned Javascript, PHP, Server administration, DNS, HTTP protocols. All the good stuff!</p><p>After a couple of years of freelancing, I decided to hone in on my software engineering skills and applied for Flatiron School. In boot camp, I was able to solidify my knowledge of programming principles and learned Ruby and React to add to my list of skills. I have also taught myself NodeJS and VueJS over the span of a year, and have fallen in love with the MEVN tech stack. </p><p>I am passionate, motivated, and hungry to learn. I adapt well to new environments, make friends easily, and learn extremely fast. These abilities, combined with my professional experience and skills, poise me for anything that comes my way.</p>
          </div>
        </div>
        <div className='divider'></div>
        <div className='skills section'>
          <h2>My Skills</h2>
        </div>
        <div className='divider'></div>
        <div className='portfolio section'>
          <h2>My Portfolio</h2>
        </div>
        <div className='divider'></div>
        <div className='blog section'>
          <h2>My Blog Posts</h2>
          <div className='posts'>
            {renderBlogPosts()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
