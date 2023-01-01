import React from 'react'
import './about.css'
import ME from '../../assets/ME--about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiFillCodepenCircle } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Months</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className='about__card'>
              <AiFillCodepenCircle className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          {/* para */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae, cupiditate dolorum autem ea ratione ducimus exercitationem doloremque cum ipsum quia perferendis aut voluptates quo? Esse illo odit dolor maiores.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About