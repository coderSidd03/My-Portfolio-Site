import React from 'react'
import './services.css'
import PortfolioData from '../portfolio/portfolioData.js'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>My Works</h2>

      <Swiper className="container services__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          PortfolioData.map(({ id, image, title, github, details }) => {
            return (
              <SwiperSlide key={id} className='services'>
                <div className="services__avatar">
                  <img src={image} alt="avatar" />
                </div>
                <h4 className="services__name">{title}</h4>
                <h5 className="services__position">{details}</h5>
                <small className="services__review">{details}</small>
                <a href={github} className='btn btn-primary'>Go To See</a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Services


/** 
 *         {
          PortfolioData.map(({ id, image, title,github, details }) => {
            return (
              <SwiperSlide key={id} className='services'>
                <div className="services__avatar">
                  <img src={image} alt="avatar" />
                </div>
                <h4 className="services__name">{title}</h4>
                 <h5 className="services__position">{details}</h5> 
                <small className="services__review">{details}</small>
                <a href={github} className='btn btn-primary'>Go To See</a>
              </SwiperSlide>
            )
          })
        }
*/ 