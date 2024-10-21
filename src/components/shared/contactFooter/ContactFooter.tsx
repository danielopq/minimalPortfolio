import './contactFooter.css';
import StandardButton from '../standardButton/StandardButton';

interface ContactFooterProps{
    changeSection:(section:string)=>void;
}


/**
 * Renders a contact footer section that appears on various parts of the website.
 * This section encourages users to initiate a project together.
 * 
 * @param {ContactFooterProps} param0 - Props for the ContactFooter component.
 * @param {function} param0.changeSection - Function to navigate to the selected section.
 * @returns {JSX.Element} The ContactFooter component.
 */
const ContactFooter: React.FC<ContactFooterProps> = ({changeSection}) => {
    return (
        <section id="contactFooter">
            <h2>Interested in doing a project together?</h2>
            <div id="contactFooter-line"></div>
            <StandardButton value='CONTACT ME' mode='lightButton' handleClick={()=>changeSection('contact')} />
        </section>
    )
}
export default ContactFooter;