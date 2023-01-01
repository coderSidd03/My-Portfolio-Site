import React from 'react'
//importing installed react icons
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    // adding social icons from react-icons
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/soumyadeep-chakraborty-521793204/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/coderSidd03" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com/isoumya_03" target="_blank"><BsTwitter /></a>
      <a href="https://leetcode.com/coderSidd/" target="_blank"><SiLeetcode /></a>
      <a href="https://auth.geeksforgeeks.org/user/user_yi3mrdu/practice" target="_blank"><SiGeeksforgeeks /></a>
    </div>
  )
}

export default HeaderSocials