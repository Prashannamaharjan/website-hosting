import React from 'react'
import './Project.css'
import Bhktapur from '../../assets/project/Bhktapur/1.jpg'
import Manisha from '../../assets/project/manisha/1.jpg'
import Rusha from '../../assets/project/rusha/1.jpg'
import Analog from '../../assets/project/vintage/1.JPG'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className='project' >
       <div className='card__project'>

        <article className='card_artical'>
          <img src={Rusha} alt="Sailesh wed Rusha" className='card__img'/>
          <div className='card__data'>
            <span className='card__description'>Wedding</span>
            <h2 className='card__title'>Sailesh Wed Rusha</h2>
            {/* <a href="manisha.html" className="card__button">Read More</a> */}
            <Link to="/rusha"  className="card__button">Read More</Link>
          </div>
        </article>

        <article className='card_artical'>
          <img src={Bhktapur} alt="Bhaktapur" className='card__img'/>
          <div className='card__data'>
            <span className='card__description'>"Bhaktapur – a living museum where every brick whispers the glory of Nepal’s timeless heritage."</span>
            <h2 className='card__title'>Bhaktapur</h2>
            {/* <a href="manisha.html" className="card__button">Read More</a> */}
            <Link to="/Bhakta"  className="card__button">Read More</Link>
          </div>
        </article>

        <article className='card_artical'>
          <img src={Manisha} alt="Manisha wedding" className='card__img'/>
          <div className='card__data'>
            <span className='card__description'> Wedding</span>
            <h2 className='card__title'>Manisha Wedding</h2>
            {/* <a href="manisha.jsx" target='_blank' className="card__button">Read More</a> */}
            <Link to="/manisha"  className="card__button">Read More</Link>
          </div>
        </article>

        <div className='for center'>
        <article className='card_artical'>
          <img src={Analog} alt="Analog" className='card__img'/>
          <div className='card__data'>
            <span className='card__description'> "where every frame holds the timeless soul of vintage beauty.</span>
            <h2 className='card__title'>Analog</h2>
            {/* <a href="manisha.jsx" target='_blank' className="card__button">Read More</a> */}
            <Link to="/vintage"  className="card__button">Read More</Link>
          </div>
        </article>
        </div>
        

      </div>
    </div>
  )
}

export default Project