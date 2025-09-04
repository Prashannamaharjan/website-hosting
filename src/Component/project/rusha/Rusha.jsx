import React from 'react'
import './Rusha.css'
import rusha1 from '../../../assets/project/rusha/1.jpg'
import rusha2 from '../../../assets/project/rusha/2.jpg'
import rusha3 from '../../../assets/project/rusha/3.jpg'
import rusha4 from '../../../assets/project/rusha/4.jpg'
import rusha5 from '../../../assets/project/rusha/5.jpg'
import rusha6 from '../../../assets/project/rusha/6.jpg'
import rusha7 from '../../../assets/project/rusha/7.jpg'
import rusha8 from '../../../assets/project/rusha/8.jpg'
import rusha9 from '../../../assets/project/rusha/9.jpg'
import rusha10 from '../../../assets/project/rusha/10.jpg'
import rusha11 from '../../../assets/project/rusha/11.jpg'
import { Link } from 'react-router'


const Rusha = () => {
  return (
    <div className='Rusha'>
        <h1><u>Photos Of Sailesh Weds Rusha</u></h1>
    <div className='Rusha-photos'>
        <img src={rusha1} alt="" />
        <img src={rusha2} alt="" />
        <img src={rusha11} alt="" />
        <img src={rusha7} alt="" />
        <img src={rusha5} alt="" />
        <img src={rusha4} alt="" />
        <img src={rusha6} alt="" />
        <img src={rusha8} alt="" />
        <img src={rusha9} alt="" />
        <img src={rusha10} alt="" />
        <img src={rusha3} alt="" />
    </div>
    <Link to="/" className="card__button">Back</Link> {/*is connected to  <Route path="/" element={<Layout> <Homelayout /></Layout>} />  in App.jsx*/}
    </div>
  )
}

export default Rusha