import React from 'react'
import CV from '../../assets/resume_Soumyadeep Chakraborty.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA

// here download tag make our CV downloadable
// we are referring id contact to go to that section when click on let's talk btn 