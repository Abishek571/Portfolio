import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Abishek S</a>

      <ul className='permalinks'>
        <li><a href='#'> Home</a></li>
        <li><a href='#about'> About</a></li>
        <li><a href='#experience'> Experience</a></li>
        <li><a href='#service'> Services</a></li>
        <li><a href='#portfolio'> Portfolio</a></li>
        <li><a href='#contact'> Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com' target='_blank'  rel="noreferrer" ><FaFacebookSquare /></a>
        <a href='https://instagram.com' target='_blank'  rel="noreferrer" > <FiInstagram /></a>
        <a href='https://twitter.com' target='_blank'  rel="noreferrer" ><FaTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>
          &copy;Abishek S. All Rights Reserved
        </small>
      </div>

    </footer>
  )
}

export default Footer
