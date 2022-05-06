import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaLaptopCode} from 'react-icons/fa'
import {TiMessages} from 'react-icons/ti'
import {useState} from 'react'
import  './Nav.css'
const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
 
  return (
    <nav >
      <a href="# " onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active':''}><BsFillPersonFill/></a>
      <a href="#skills " onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills'? 'active':''} ><FaLaptopCode/></a>
      <a href="#contact " onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active':''} ><TiMessages/></a>
    </nav>
  )
}

export default Nav