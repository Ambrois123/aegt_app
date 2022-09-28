import React, { useState, useEffect, useRef } from 'react'
import 'components/FormContact/FormContact.css'
import emailjs from '@emailjs/browser';

export default function ValidForm() {
    const initialValues ={username:"", email: "", message:""}
    const [formValues, setFormvalues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const form = useRef();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormvalues({...formValues, [name]: value})
        console.log(formValues);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        emailjs.sendForm(
            'service_h3lw43k', 
            'template_ii5eexl', form.current, 
            'HM2P1nGXaXmNlmjMr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      //clear all input values in the form
     
    
    };

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors])

    const validate =(values) =>{
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!values.username) {
            errors.username = "Nom requis!";
        }
        if(!values.email) {
            errors.email = "Email requis!";
        } else if(!regex.test(values.email)){
            errors.email = "Email n'est pas valide!";
        }
        if(!values.message) {
            errors.message = "Message requis!";
        }
        return errors;
    }


    
  return (
    <div className='container '>
        <div>
        {Object.keys(formErrors).length === 0 && isSubmit ? (<p className="validate">Votre message a été bien envoyé!</p>
        ) : "" }
        
            <form ref={form} onSubmit={handleSubmit} >
            <h4 className='contact'>Nous contacter</h4>

            <div>
            <label>Nom </label>
                <input type="text" id="fname" name="username" placeholder="Votre nom.."
                    value={formValues.username}
                    onChange={handleChange}
                />
            </div>
                <p className="errorsMessage">{formErrors.username}</p>

            <div>
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="votre email"
                    value={formValues.email}
                    onChange={handleChange}
                />
            </div>
                <p className="errorsMessage">{formErrors.email}</p>

            <div>
                <label>Message</label>
                <textarea id="message" name="message" placeholder="Votre message"
                    value={formValues.message}
                    onChange={handleChange}
                ></textarea>
                <p className="errorsMessage">{formErrors.message}</p>
            </div>
                <div className='btn'>
                <input type="submit" value="Envoyer" />
                </div>
            </form>
        </div>
    </div>
  )
}
