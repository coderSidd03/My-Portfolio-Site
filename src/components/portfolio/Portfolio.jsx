import React from 'react'
import './portfolio.css'
import Data from './portfolioData.js'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          Data.map(({ id, image, title, github, demo, details }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4 style={{marginBottom: "20px"}}>{details}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='blank'>Github</a>
                  {demo&& (
                  <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                  )}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
