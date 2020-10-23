import React, {useEffect, useState} from 'react'

export default function BlogSection() {
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
    return blogPosts.map(post => {
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
    <div className='blog section'>
      <h2>My Blog Posts</h2>
      <div className='posts'>
        {renderBlogPosts()}
      </div>
      <a href='https://medium.com/@aaron_schuyler' className='see-more'>Go To Medium</a>
    </div>
  )
}
