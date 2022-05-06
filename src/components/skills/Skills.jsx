import React from 'react'
import './Skills.css'
import Progress from '../Progress/Progress'
import{AiOutlineHtml5} from 'react-icons/ai'
import{IoLogoCss3} from 'react-icons/io'
import{IoLogoJavascript} from 'react-icons/io'
import{DiPhp} from 'react-icons/di'
import{RiReactjsLine}from 'react-icons/ri'

import{SiCplusplus} from 'react-icons/si'
import{AiFillGithub} from 'react-icons/ai'
import{FaJava} from 'react-icons/fa'
import{SiMysql} from 'react-icons/si'
import{DiLinux}from 'react-icons/di'

const Skills = () => {
  return (
    <section id='skills'>
      <h2>Take a look on  </h2>
      <h3>My Skills </h3>
      <div  className='box' id='web'>
        <h3>Web development </h3>
      
       <article> <AiOutlineHtml5/> HTML <Progress done="90"/></article>
        <article><IoLogoCss3/> CSS <Progress done="90"/></article>
        <article><IoLogoJavascript/> JavaScript <Progress done="60"/></article>
        <article><RiReactjsLine/> React <Progress done="60"/></article>
        <article><DiPhp/> PHP <Progress done="30"/></article>
       

     </div>
     
     <div className='box' id='other'>
            <h3> Other Technologies </h3>
         <article> <FaJava/> Java /OOP <Progress done="50"/></article>
        <article><SiCplusplus/> C/C++ <Progress done="50"/></article>
        <article><SiMysql/> MySQL  <Progress done="60"/></article>
        <article><AiFillGithub/> Git/Github <Progress done="60"/></article>
        <article><DiLinux/> Linux <Progress done="50"/></article>
        

            
       </div>
       </section>
  )
}

export default Skills