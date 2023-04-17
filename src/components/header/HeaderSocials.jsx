import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/jan-jefferson-lam-aa1bb2153/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/UlysseusZero" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/janjeffersonlam/"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials