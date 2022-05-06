import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const Contact = () => {
  return (
    <section id='contact'>
      <h2>Get in  touch  </h2>
      <h3>Contact Me </h3>
      <div className='contact-options'>
        <div className="contact-option"><AiOutlineMail/> <br /> E-mail 
        <h2> <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTMXZwfbzmGqCcNDkPCGXpLCSjBvxftQNNGshgSDDdQVBnlltHVbjNdXwvRsnPZLrWrqJV" target="blank" rel="noreferrer"> raniabouazra9@gmail.com </a></h2>
        </div>
        <div className="contact-option"> <BsMessenger/> <br /> Messenger
        <h2><a href="https://www.facebook.com/rania.bouazra/" target="_blank" rel="noreferrer">Send a message</a></h2>
        </div>
        <div className="contact-option"><AiOutlineWhatsApp/> <br /> Whatsapp 
        <h2>54 590 041</h2></div>
      </div>
      <div className="form">

      </div>
       </section>
  )
}

export default Contact