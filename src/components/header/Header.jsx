import React from 'react'
import CV from '../../assets/raniabouwazra.pdf'
import Me from '../../assets/mypic.png'
import HeaderSocials from './HeaderSocials'
import './Header.css'
const Header = () => {
  return (
  
    <header>
       <div className="container header__container">
      
        <h1>  I'm Rania Bouwazra</h1>
        <h2>Computer networks engineering student</h2>
        <div className="Hbutton">
          <a href={CV} download CV className='buttons'>Download CV</a>
          <a href="#contact" className='buttons'>Contact Me</a>
        </div>
        <HeaderSocials/>
        <div className='Mypic'><img src={Me} alt="A pic of me" /></div>
        <a href="#contact" className='ScrollDown'>Scroll Down</a>
       </div>
      
    </header>
  
  )
}

export default Header