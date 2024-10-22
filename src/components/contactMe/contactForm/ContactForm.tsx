import './contactForm.css'
import StandardButton from '../../shared/standardButton/StandardButton';
import { useRef } from 'react';

/**
 * Renders the "Contact Me" form, allowing users to input their name, email address, and message.
 * @returns {JSX.Element} - The ContactForm component.
 */
const ContactForm: React.FC = () => {

    const refName = useRef<HTMLInputElement>(null);
    const refEmail = useRef<HTMLInputElement>(null);
    const refMessage = useRef<HTMLTextAreaElement>(null);

    const refNameError = useRef<HTMLParagraphElement>(null);
    const refEmailError = useRef<HTMLParagraphElement>(null);
    const refMessageError = useRef<HTMLParagraphElement>(null);

    const isValidEmail=(email:string):boolean=> {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    const sendForm = ():void=>{
        if(refName.current && refNameError.current){
            if(refName.current.value.trim() == ''){
                refName.current.className = 'formatError';
                refNameError.current.innerHTML = 'This field is required';
            }else{
                refName.current.className = '';
                refNameError.current.innerHTML = '';
            }
        }

        if(refEmail.current && refEmailError.current){
            if(refEmail.current.value.trim() == ''){
                refEmail.current.className = 'formatError';
                refEmailError.current.innerHTML = 'This field is required';
            }else if(!isValidEmail(refEmail.current.value)){
                refEmail.current.className = 'formatError';
                refEmailError.current.innerHTML = 'Invalid email format';
            }
            else{
                refEmail.current.className = '';
                refEmailError.current.innerHTML = '';
            }
        }
        
        if(refMessage.current && refMessageError.current){
            if(refMessage.current.value.trim() == ''){
                refMessage.current.className = 'formatError';
                refMessageError.current.innerHTML = 'This field is required';
            }else{
                refMessage.current.className = '';
                refMessageError.current.innerHTML = '';
            }
        }
    }

    return (
        <section id="contactForm">
            <h2>Contact Me</h2>
            <div id="contactForm-content">
                <div className='formElement'>
                    <label htmlFor="name">Name</label>
                    <input type="text" ref={refName} id="name" name="name" required placeholder='Your name'/>
                    <p ref={refNameError} className='formErrorMsg'></p>
                </div>
                <div className='formElement'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" ref={refEmail} id="email" name="email" required placeholder='email@example.com'/>
                    <p ref={refEmailError} className='formErrorMsg'></p>
                </div>
                <div className='formElement'>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" ref={refMessage} name="message" required placeholder='How can I help?'/>
                    <p ref={refMessageError} className='formErrorMsg'></p>
                </div>
                <StandardButton value='SEND MESSAGE' mode='darkButton' handleClick={sendForm}/>
            </div>
        </section>
    )
}
export default ContactForm;