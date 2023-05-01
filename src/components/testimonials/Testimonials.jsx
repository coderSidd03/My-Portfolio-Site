import React from 'react'
import './testimonials.css'
import TestimonialData from './testiMonialsData'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          TestimonialData.map(({ avatar, name, position, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" className='tst-img'/>
                </div>
                <h4 className="client__name">{name}</h4>
                <h5 className="client__position">{position}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials


/** 
          <article className='testimonial'>
          <div className="client__avatar">
            <img src={Avatar1} alt="avatar_1" />
          </div>
          <h5 className="client__name">Soumyadeep Das</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, commodi! Inventore excepturi nihil accusantium ipsum in consequatur facere reprehenderit atque!
          </small>
        </article>
*/