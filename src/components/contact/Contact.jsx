import React from 'react'
import './contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdAttachEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>janjeffersonlam@gmail.com</h5>
            <a href="mailto:janjeffersonlam@gmail.com">Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>JJ JJ</h5>
            <a href="https://m.me/janjeffersonlam">Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>09269055122</h5>
            <a href="https://api.whatsapp.com/send?phone+639269055122">Send a Message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact