import React from 'react'
import{AiOutlineLinkedin} from'react-icons/ai'
import{AiOutlineGithub} from 'react-icons/ai'
import{AiOutlineFacebook} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div >
        <a className='headersc'  href="https://www.linkedin.com/in/rania-bouwazra-9865a41b2/" target="_blank" rel="noreferrer">  <AiOutlineLinkedin/></a>
        <a className='headersc' href="https://github.com/raniabouwazra" target="_blank" rel="noreferrer"> <AiOutlineGithub/></a>
        <a className='headersc' href="https://www.facebook.com/rania.bouazra/" target="_blank" rel="noreferrer"> <AiOutlineFacebook/></a>
    </div>
  )
}

export default HeaderSocials