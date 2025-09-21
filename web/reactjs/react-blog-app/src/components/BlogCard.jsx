import React from 'react'
import { FcClock } from "react-icons/fc";

const BlogCard = ({blog}) => {
  return (
    <div className='card'>
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      <small> <FcClock /> {blog.date}</small>
    </div>
  )
}

export default BlogCard