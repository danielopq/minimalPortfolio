import './contactFooter.css';
import StandardButton from '../defaultButton/StandardButton';

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