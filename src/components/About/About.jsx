import React from 'react'
import './About.css'
import {MdOutlinePlace} from 'react-icons/md'
import{AiOutlineClockCircle} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h2>Get to know  </h2>
      
     <div  className='box' id='aboutme'>
        <h3>About Me</h3>
         I'm a computer networks and telecommunications first year engineering student at the National Insatitute Of Applied Sciences And Technologies (INSAT) .
         I'm also a web development enthusiast who's trying to dive more into this world and apply what I learn through personal projects  .
         I count this portfolio as my very first project in which I tried to employ what've acquired through the last few months 
     </div>
     
     <div className='box' id='academic'>
            <h3> About My education </h3>
            <ul>
              <li> <span>Computer networks and Telecommunications engineering cycle </span><br />
              <MdOutlinePlace/> INSAT : National Institute of Applied Sciences and Technologies <br />
              <AiOutlineClockCircle/> 2021-Present </li>
              <li><span>Preparatory cycle</span>  <br />
              <MdOutlinePlace/> INSAT : National Institute of Applied Sciences and Technologies <br />
              <AiOutlineClockCircle/> 2019-2021</li>
              <li> <span>Baccalaureate degree majored in Maths (graduated with honors)</span> <br />
              <MdOutlinePlace/> Pioneer High School of Nabeul <br />
              <AiOutlineClockCircle/> 2018-2019
              </li>
            </ul>

       </div>
      
      </section>
  )
}

export default About