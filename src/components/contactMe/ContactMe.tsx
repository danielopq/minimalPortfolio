import GetInTouch from './getInTouch/GetInTouch';
import ContactForm from './contactForm/ContactForm';

/**
 * Renders the 'Contact me' section where the user can send a contact message 
 * @returns {JSX.Element} - The ContactMe component.
 */
const ContactMe: React.FC = () => {
    return (
        <main id="contactMe">
            <GetInTouch />
            <ContactForm />
        </main>
    )
}
export default ContactMe;