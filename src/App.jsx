import React from 'react'
import Navbar from './Component/navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/AboutMe/About'
import Project from './Component/project/Project'
import Contact from './Component/contact/Contact'
import Title from './Component/title/Title'
import Footer from './Component/footer/footer'

import { Routes, Route, useLocation } from 'react-router-dom'
import Manisha from './Component/project/manisha/Manisha'
import Rusha from './Component/project/rusha/Rusha'
import Bhaktapur from './Component/project/bhaktapur/Bhaktapur'
import Analog from './Component/project/analog/analog'

// Layout component that conditionally shows Navbar
const Layout = ({ children }) => {
  const location = useLocation()
  
  // Don't show navbar on Manisha page
  const showNavbar = location.pathname !== '/manisha'
  
  return (
    <div>
      {showNavbar && <Navbar />}
      {children}
    </div>
  )
}

// Home layout (landing page)
export const Homelayout = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='container'>
        <Title subTitle='' title='About Me'/>
        <About/>
        <Title subTitle='' title='Project'/>
        <Project/>
        <Title subTitle='' title='Contact'/>
        <Contact/>
        <Footer/>
      </div>
    </div>      
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Homelayout />
        </Layout>
      } />
      <Route path="/manisha" element={<Manisha />} />
      <Route path="/vintage" element={<Analog />} />
      <Route path="/Bhakta" element={<Bhaktapur />} />
      <Route path="/rusha" element={<Rusha />} />
    </Routes>
  )
}

export default App
