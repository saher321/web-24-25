'use client'
import { WebLayout } from '@/app/layouts/WebLayout'
import { blogs } from '@/app/utils/blogs'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect (()=> {
    const getDetail = () => {
      const blog = blogs.find((blog) => params.id == blog.id );
      if (blog) {
        setBlog(blog);
      } else {
        console.log("No data found")
      }
    }
    getDetail()
  }, [params.id])

  return (
    <WebLayout>
       Blog Detail page #{params?.id}
       <div>
        <div className='shadow-lg rounded p-3'>
          <span className='bg-purple-600 text-white p-1 rounded-full shadow-md'>#{blog?.id}</span>
          <div className='text-xl'>
            {blog?.title}
          </div>
          <p>
            {blog?.content}
          </p>
          <small> {blog?.author} &bull; {blog?.date}</small>
        </div>
       </div>
    </WebLayout>
  )
}

export default page