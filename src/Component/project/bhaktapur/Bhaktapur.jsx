import React from 'react'
import './Bhaktapur.css'
import bhaktapur1 from '../../../assets/project/Bhktapur/1.jpg'
import bhaktapur2 from '../../../assets/project/Bhktapur/2.jpg'
import bhaktapur3 from '../../../assets/project/Bhktapur/3.jpg'
import bhaktapur4 from '../../../assets/project/Bhktapur/4.jpg'
import bhaktapur5 from '../../../assets/project/Bhktapur/5.jpg'
import bhaktapur6 from '../../../assets/project/Bhktapur/6.jpg'
import bhaktapur7 from '../../../assets/project/Bhktapur/7.jpg'
import bhaktapur8 from '../../../assets/project/Bhktapur/8.jpg'
import bhaktapur9 from '../../../assets/project/Bhktapur/9.jpg'
import bhaktapur10 from '../../../assets/project/Bhktapur/10.jpg'
import bhaktapur11 from '../../../assets/project/Bhktapur/11.jpg'
import { Link } from 'react-router'


const Bhaktapur = () => {
  return (
    <div className='bhaktapur'>
        <h1><u>Glimpse Of Bhaktapur</u></h1>
        <div className='bhaktapur-photo'>
                <img src={bhaktapur1} alt="" />
                <img src={bhaktapur5} alt="" />
                <img src={bhaktapur3} alt="" />
                <img src={bhaktapur4} alt="" />
                <img src={bhaktapur2} alt="" />
                <img src={bhaktapur6} alt="" />
                <img src={bhaktapur7} alt="" />
                <img src={bhaktapur8} alt="" />
                <img src={bhaktapur10} alt="" />
                <img src={bhaktapur11} alt="" />
                <img src={bhaktapur9} alt="" />
        </div>
        <Link to="/" className="card__button">Back</Link> {/*is connected to  <Route path="/" element={<Layout> <Homelayout /></Layout>} />  in App.jsx*/}
    </div>
  )
}

export default Bhaktapur