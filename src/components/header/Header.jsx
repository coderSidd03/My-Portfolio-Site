import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/cropEdited.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h3>Hello I'm</h3>
                <h1>Soumyadeep Chakraborty</h1>
                <h4 className="text-light">Full Stack Developer</h4>
                <CTA />
                <HeaderSocials/>

                {/* profile pic */}
                <div className="me"> 
                    <img src={ME} className="me-img" alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header