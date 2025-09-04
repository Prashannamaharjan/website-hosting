import React from 'react'
import Manisha1 from '../../../assets/project/manisha/1.jpg'
import Manisha4 from '../../../assets/project/manisha/4.jpg'
import Manisha3 from '../../../assets/project/manisha/3.jpg'
import Manisha2 from '../../../assets/project/manisha/2.jpg'
import './Manisha.css'
import { Link } from 'react-router'

const Manisha = () => {
  return (
    <div className='manisha'>
        <h1><u>Photos Of Manisha's Wedding</u></h1>
        <div className='manisha-photos'>
          <img src={Manisha1} alt="" />
          <img src={Manisha2} alt="" />
          <img src={Manisha3} alt="" />
          <img src={Manisha4} alt="" />
        </div>
        <Link to="/" className="card__button">Back</Link> {/*is connected to  <Route path="/" element={<Layout> <Homelayout /></Layout>} />  in App.jsx*/}
    </div>
  )
}

export default Manisha