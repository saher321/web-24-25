import React from 'react'
import blogs from './utils/blogs.js'
import BlogCard from './components/BlogCard.jsx'

const App = () => {

  return (
    <div>
      <h1>Blogs</h1>
      <div className='card-wrapper'>
      {
        blogs.length > 0 ?
        blogs.map((blog, i)=>{
          return (
            <BlogCard key={i} blog={blog}/>
          )
        }) : "No data to show"
      }
      </div>
    </div>
  )
}

export default App