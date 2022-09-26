import React, { useRef } from 'react';
import 'components/FormContact/FormContact.css'
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_h3lw43k', 
        'template_ii5eexl', form.current, 
        'HM2P1nGXaXmNlmjMr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      //clear all input
      e.target.reset();
  };

  return (
    <div className='container '>
        <form ref={form} onSubmit={sendEmail}>
        <h4 className='contact'>Nous contacter</h4>
            <label>Nom</label>
                <input type="text" name="user_name" id="fname" />
            <label>Email</label>
                <input type="email" name="user_email" id="email" />
            <label>Message</label>
                <textarea name="message" id="message" />
            <div className='btn'>
                <input type="submit" value="Envoyer" />
            </div>
            
        </form>
    </div>
    
  );
};
