import React from 'react'
import './Analog.css'

import analog2 from '../../../assets/project/vintage/2.JPG'
import analog3 from '../../../assets/project/vintage/3.JPG'
import analog4 from '../../../assets/project/vintage/4.JPG'
import analog5 from '../../../assets/project/vintage/5.JPG'
import analog6 from '../../../assets/project/vintage/6.JPG'
import { Link } from 'react-router'

const Analog = () => {
  return (
    <div className='analog-vintage'>
        <h1><u>Photos Shoot By Analog Cam</u></h1>
        <div className='analog-photo'>
                <img src={analog3} alt="" />
                <img src={analog4} alt="" />
                <img src={analog5} alt="" />
                <img src={analog6} alt="" />
                <img src={analog2} alt="" />
        </div>
        <Link to="/" className="card__button">Back</Link> {/*is connected to  <Route path="/" element={<Layout> <Homelayout /></Layout>} />  in App.jsx*/}
    </div>
  )
}

export default Analog