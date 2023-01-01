import React from 'react'
import './services.css'
import PortfolioData from '../portfolio/portfolioData.js'

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>My Works</h2>

      <Swiper className="container services__container swiper"
        // install Swiper modules
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {
          PortfolioData.map(({ id, image, title,github, details }) => {
            return (
              <SwiperSlide key={id} className='services'>
                <div className="services__avatar">
                  <img src={image} alt="avatar" />
                </div>
                <h4 className="services__name">{title}</h4>
                {/* <h5 className="services__position">{details}</h5> */}
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