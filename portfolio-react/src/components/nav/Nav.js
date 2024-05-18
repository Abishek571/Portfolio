import React from 'react'
import{TiHome} from 'react-icons/ti'
import{BiSolidUserCircle} from 'react-icons/bi'
import{BsFillBookmarkFill} from 'react-icons/bs'
import{RiServiceFill} from 'react-icons/ri'
import{IoMdContact} from 'react-icons/io'
import './nav.css'
import { useState } from 'react'



const Nav = () => {
  
  const[Activenav, SetActivenav] = useState('#');

  return (  
   <nav>
     <a href = "#" onClick={ () => SetActivenav('#')} className= {Activenav ==='#' ? 'active':" "}> <TiHome/> </a>
     <a href = '#about' onClick={ () => SetActivenav('#about')} className={Activenav ==='#about' ? 'active':" "}> <BiSolidUserCircle/> </a>
     <a href = '#experience' onClick={ () => SetActivenav('#experience')} className={Activenav ==='#experience' ? 'active':" "}> <BsFillBookmarkFill/> </a>
     <a href ='#service' onClick={ () => SetActivenav('#service')} className={Activenav ==='#service' ? 'active':" "}> <RiServiceFill/> </a>
     <a href = '#contact' onClick={ () => SetActivenav('#contact')} className={Activenav ==='#contact' ? 'active':" "}> <IoMdContact/> </a>
   </nav>
  )
}

export default Nav
