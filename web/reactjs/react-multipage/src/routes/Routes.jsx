import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Page404 from '../pages/Page404'
import Users from '../pages/Users'
import UserDetails from '../pages/UserDetails'

const Routes = () => {

  
const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/blog', element: <Blog />},
  {path: '/users', element: <Users />},
  {path: '/users/:id', element: <UserDetails />},


  // 404 page
  {path: '*', element: <Page404 />}
])

  return (
    <RouterProvider router={router}/>
  )
}

export default Routes