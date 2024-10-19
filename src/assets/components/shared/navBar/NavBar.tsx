import { useState } from 'react';
import './navBar.css';

/**
 * Renders the main navigation bar of the website.
 * @returns {JSX.Element} The main navigation bar component.
 */
const Navbar: React.FC = () => {

    const [currentSection,setCurrentSection] = useState<string>('home');

    /**
     * Updates the current section state to the selected section.
     * @param {string} section - The section to navigate to.
     */
    const changeSection = (section:string)=>{
        setCurrentSection(section);
    }

    return (
        <nav id="navBar">
            <div id="navBarLinks">
                <button onClick={()=>changeSection('home')} className={currentSection === 'home' ? 'navBarActiveLink' : 'navBarInactiveLink'}>HOME</button>
                <button onClick={()=>changeSection('portfolio')} className={currentSection === 'portfolio' ? 'navBarActiveLink' : 'navBarInactiveLink'}>PORTFOLIO</button>
                <button onClick={()=>changeSection('contact')} className={currentSection === 'contact' ? 'navBarActiveLink' : 'navBarInactiveLink'}>CONTACT ME</button>
            </div>
        </nav>
    )
}
export default Navbar;