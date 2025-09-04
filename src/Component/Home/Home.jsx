import React from 'react'
import './Home.css'
import img from '../../assets/prashana.png'



const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <img src={img} alt="" />
          <div className='home-text'>
           Hello It's Me <h1>Prashanna Maharjan</h1>
        
        <div className='Text-changing'> 
          <p className='intro-text'>I'm a</p> 
            <div className='role-container'>
              <span className='role'>Frontend Developer.</span>
              <span className='role'>Freelancer.</span>
              <span className='role'>Photographer.</span>
              <span className='role'>Videographer.</span>
              <span className='role'>Content Creator.</span>
            </div>
            </div>
      <p className='me'>I am a Computer Science undergraduate passionate about frontend and backend development, combining skills in React, UI/UX design, and creative digital content to build engaging user experiences.</p>
         </div>
      </div>
    </div>
  )
}

export default Home