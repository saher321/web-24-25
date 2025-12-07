import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='grid place-items-center'>
        <div className='flex gap-5 m-2 p-4 max-w-fit rounded-full shadow-lg'>
        <div className=' hover:text-purple-600'>
            <Link href={'/'}>Home</Link>
        </div>
        <div className=' hover:text-purple-600'>
            <Link href={'/about-us'}>About us</Link>
        </div>
        <div className=' hover:text-purple-600'>
            <Link href={'/blogs'}>Blogs</Link>
        </div>
        <div className=' hover:text-purple-600'>
            <Link href={'/contact-us'}>Contact us</Link>
        </div>
    </div>
    </nav>
  )
}

export default Navbar