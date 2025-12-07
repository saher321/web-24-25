import { WebLayout } from '@/app/layouts/WebLayout'
import React from 'react'
import { blogs } from '@/app/utils/blogs'
import Link from 'next/link'
const page = () => {
  return (
    <WebLayout>
        <div>Blogs list</div>
        <div>
          <div className='grid grid-cols-12 gap-3'>
            {blogs.map( (blog) => {
              return (
               <div key={blog.id} className='col-span-6'>
                <Link href={`/blogs/${blog.id}`}>
                  <div className='shadow-lg rounded p-3'>
                    <span className='bg-purple-600 text-white p-1 rounded-full shadow-md'>#{blog.id}</span> {blog.title}
                  </div>
                </Link>
               </div> 
              )
            })}
          </div>
        </div>
    </WebLayout>
  )
}

export default page