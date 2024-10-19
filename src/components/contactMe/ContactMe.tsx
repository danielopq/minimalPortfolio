import './contactMe.css';
import GetInTouch from './getInTouch/GetInTouch';
import ContactForm from './contactForm/ContactForm';

const ContactMe: React.FC = () => {
    return (
        <main id="contactMe">
            <GetInTouch />
            <ContactForm />
        </main>
    )
}
export default ContactMe;