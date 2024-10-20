import './contactFooter.css';
import StandardButton from '../standardButton/StandardButton';

/**
 * Renders a contact footer section that appears on various parts of the website.
 * @returns {JSX.Element} - The ContactFooter component.
 */
const ContactFooter: React.FC = () => {
    return (
        <section id="contactFooter">
            <h2>Interested in doing a project together?</h2>
            <div id="contactFooter-line"></div>
            <StandardButton value='CONTACT ME' mode='lightButton' />
        </section>
    )
}
export default ContactFooter;