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

    const refConfirmationWindow = useRef<HTMLDivElement>(null);

    /**
     * Checks whether the email format is valid.
     * @param {string} email - The email address to be validated.
     * @returns {boolean} - Returns true if the email format is valid, otherwise false.
     */
    const isValidEmail = (email: string): boolean => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    /**
     * Validates the form fields and prevents form submission if validation fails.
     * Displays a confirmation window if all fields are valid.
     * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
     */
    const sendForm = (event: React.FormEvent<HTMLFormElement>): void => {
        let validForm = true;
        event.preventDefault();

        if (refName.current && refNameError.current) {
            if (refName.current.value.trim() == '') {
                refName.current.className = 'formatError';
                refNameError.current.innerHTML = 'This field is required';
                validForm = false;
            } else {
                refName.current.className = '';
                refNameError.current.innerHTML = '';
            }
        }

        if (refEmail.current && refEmailError.current) {
            if (refEmail.current.value.trim() == '') {
                refEmail.current.className = 'formatError';
                refEmailError.current.innerHTML = 'This field is required';
                validForm = false;
            } else if (!isValidEmail(refEmail.current.value)) {
                refEmail.current.className = 'formatError';
                refEmailError.current.innerHTML = 'Invalid email format';
                validForm = false;
            }
            else {
                refEmail.current.className = '';
                refEmailError.current.innerHTML = '';
            }
        }

        if (refMessage.current && refMessageError.current) {
            if (refMessage.current.value.trim() == '') {
                refMessage.current.className = 'formatError';
                refMessageError.current.innerHTML = 'This field is required';
                validForm = false;
            } else {
                refMessage.current.className = '';
                refMessageError.current.innerHTML = '';
            }
        }

        if(refConfirmationWindow.current && validForm){
            refConfirmationWindow.current.setAttribute('style','display:flex');
            refName.current && (refName.current.value = '');
            refEmail.current && (refEmail.current.value = '');
            refMessage.current && (refMessage.current.value = '');
        }
    }

    /**
     * Hides the confirmation window after the form has been submitted successfully.
     */
    const hideConfirmationWindow = ():void =>{
        refConfirmationWindow.current && refConfirmationWindow.current.setAttribute('style','display:none');
    }

    return (
        <section id="contactForm">
            <h2>Contact Me</h2>
            <form onSubmit={sendForm}>
                <div id="contactForm-content">
                    <div className='formElement'>
                        <label htmlFor="name">Name</label>
                        <input type="text" ref={refName} id="name" name="name" placeholder='Your name' />
                        <p ref={refNameError} className='formErrorMsg'></p>
                    </div>
                    <div className='formElement'>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" ref={refEmail} id="email" name="email" placeholder='email@example.com' />
                        <p ref={refEmailError} className='formErrorMsg'></p>
                    </div>
                    <div className='formElement'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" ref={refMessage} name="message" placeholder='How can I help?' />
                        <p ref={refMessageError} className='formErrorMsg'></p>
                    </div>
                    <StandardButton value='SEND MESSAGE' mode='darkButton' />
                </div>
            </form>
            <div ref={refConfirmationWindow} id="contactConfirmationWindow" style={{display:'none'}}>
                <div id="contactSentMessage">
                    <p id="contactSentMessageHead">Thank you !</p>
                    <p id="contactSentMessageText">  I’ve received your message and will respond as soon as possible.</p>
                    <StandardButton value='Accept' mode='darkButton' handleClick={hideConfirmationWindow}/>
                </div>
            </div>
        </section>
    )
}
export default ContactForm;