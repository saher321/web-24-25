import React, { useState } from 'react'
import blogs from './utils/blogs.js'
import BlogCard from './components/BlogCard.jsx'

const App = () => {
  const [ pageTitle, setPageTitle ] = useState("Blogs");

  return (
    <div>
      <h1>{pageTitle ? pageTitle : "Untitled" }</h1>
      <div className='card-wrapper'>
      {
        blogs.length > 0 ?
        blogs.map((blog)=>{
          return (
            <BlogCard key={blog.id} blog={blog}/>
          )
        }) : "No data to show"
      }
      </div>
    </div>
  )
}

export default App