import React from 'react'
import './nav.css'
import { BiHomeCircle, BiUser, BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { IoMdContact } from 'react-icons/io'
// to make active when a button clicked in nav
import { useState } from 'react'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeCircle /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
        </nav>
    )
}

export default Nav