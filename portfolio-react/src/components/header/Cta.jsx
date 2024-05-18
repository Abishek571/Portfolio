import React from 'react'
import CV from '../../assests/cv.pdf'
import './header.css'

const Cta = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download Cv</a>
      <a href='#contact' className=' btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default Cta
