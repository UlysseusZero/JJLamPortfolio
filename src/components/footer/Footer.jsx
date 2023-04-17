import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Jan Jefferson Lam</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://twitter.com"><AiFillTwitterSquare/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Jan Jefferson Lam. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer