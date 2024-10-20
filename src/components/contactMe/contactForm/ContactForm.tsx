import './contactForm.css'
import StandardButton from '../../shared/standardButton/StandardButton';

/**
 * Renders the "Contact Me" form, allowing users to input their name, email address, and message.
 * @returns {JSX.Element} - The ContactForm component.
 */
const ContactForm: React.FC = () => {
    return (
        <section id="contactForm">
            <h2>Contact Me</h2>
            <div id="contactForm-content">
                <div className='formElement'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required aria-required="true" placeholder='Your name'/>
                </div>
                <div className='formElement'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder='email@example.com'/>
                </div>
                <div className='formElement'>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder='How can I help?'/>
                </div>
                <StandardButton value='SEND MESSAGE' mode='darkButton'/>
            </div>
        </section>
    )
}
export default ContactForm;