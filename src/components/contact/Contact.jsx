import React from 'react'
import './contact.css'
import { GoMailRead } from 'react-icons/go'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dk7ft65', 'template_8tsjbgi', form.current, 'VJGVMMF9Dd2PkM8d8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GoMailRead className='.contact__option-icon' />
            <h4>Email</h4>
            <h5>isoumya03@gmail.com</h5>
            <a href="mailto:isoumya03@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='.contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Soumyadeep Chakraborty</h5>
            <a href="https://m.me/SiddOfficial03" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='.contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Soumyadeep Chakraborty</h5>
            <a href="https://wa.me/+917003232944" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact