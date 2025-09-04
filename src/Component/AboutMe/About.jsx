import React from 'react'
import './About.css'
import aboutimg from '../../assets/web.jpg'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0, translateX:"-100%"}}
    whileInView={{opacity:1, translateX: 0}}
    transition={{duration: 1}} 
    className='about'>
      <div className='about-container'>
      <img src={aboutimg} className='aimg' alt="" />
      {/* <h1 >About Me</h1> */}
      <div className='about-me'>
      <p > 
        My name is Prashanna Maharjan, and I am an enthusiastic Computer Science undergraduate at Taylor’s University. I have a strong interest in frontend and backend development, with growing expertise in React and modern web technologies. Alongside programming, I have developed skills in UI/UX design, where I focus on creating user-friendly and visually appealing interfaces.
        My creative side extends to graphic design, photography, and videography, allowing me to bring a unique perspective to digital projects. I have worked as a content creator and graphic designer, gaining hands-on experience in producing engaging visuals, videos, and promotional materials. These experiences have strengthened my ability to collaborate with teams, adapt to new challenges, and deliver high-quality results under deadlines.
        I am also a React JS certified developer, which has enhanced my ability to design responsive and interactive web applications. My background in both technical and creative fields gives me a balanced skill set for solving problems with both logic and innovation.
        I am passionate about continuous learning and improving my skills to stay updated with the latest trends in technology. My goal is to contribute to impactful projects, grow as a developer, and create meaningful digital experiences that combine technology, design, and creativity.
      </p>
      </div>
      </div>
    </motion.div>
  )
}

export default About