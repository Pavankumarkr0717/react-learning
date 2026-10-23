import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import ContactUs from './components/Contact/ContactUs'
import Github from './components/Github/Github'
import Home from './components/Home/Home'
import User from './components/User/User'
import './index.css'
import Layout from './Layout'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//       path:'',
//       element: <Home/>,
//     },
//     {
//       path:'About',
//       element: <About/>,
//     },
//     {
//       path:'Contact',
//       element: <ContactUs/>
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path = '' element = {<Home/>}/>
      <Route path = 'About' element = {<About/>}/>
      <Route path = 'Contact' element = {<ContactUs/>}/>
      <Route path = 'User/:userId' element = {<User/>}/>
      <Route path = 'Github' element = {<Github/>}/>
    </Route>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
