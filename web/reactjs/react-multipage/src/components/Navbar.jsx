import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const links = [
    {url: "/", title: "Home"},
    {url: "/users", title: "Users"},
    {url: "/about", title: "About"},
    {url: "/blog", title: "Blog"},
  ];

  return (
    <div className='navbar-wrapper'>
      <nav>
        <div className='logo'>Logo</div>
        <ul className='links'>
          {
            links.map((link, i)=>{
              return (
                <li key={i}>
                  <NavLink to={link.url} className={(e) => e.isActive ? "red" : "black"}>{link.title}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar