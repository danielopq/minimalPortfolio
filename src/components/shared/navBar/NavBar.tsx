import { useEffect, useState } from 'react';
import './navBar.css';

interface NavbarProps {
    selectedSection:string;
    changeSection:(section:string)=>void;
}

/**
 * Renders the main navigation bar of the website.
 * @param {NavbarProps} param0 - Props for the Navbar component.
 * @param {string} param0.selectedSection - The currently selected section, which determines the active navigation button.
 * @param {function} param0.changeSection - Function to navigate to the specified section of the website.
 * @returns {JSX.Element} The main navigation bar component.
 */
const Navbar: React.FC<NavbarProps> = ({selectedSection='home',changeSection}) => {

    const [currentSection, setCurrentSection] = useState<string>(selectedSection);

    useEffect(()=>{
        changeMenu(selectedSection)
    },[selectedSection]);

    /**
     * Updates the current section state to the selected section.
     * @param {string} section - The section to navigate to.
     */
    const changeMenu = (section: string) => {
        section !== 'details' && setCurrentSection(section);
    }

    return (
        <nav id="navBar">
            <div id="navBarLinks">
                <button onClick={() => changeSection('home')} className={currentSection === 'home' ? 'navBarActiveLink' : 'navBarInactiveLink'}>HOME</button>
                <button onClick={() => changeSection('portfolio')} className={currentSection === 'portfolio' ? 'navBarActiveLink' : 'navBarInactiveLink'}>PORTFOLIO</button>
                <button onClick={() => changeSection('contact')} className={currentSection === 'contact' ? 'navBarActiveLink' : 'navBarInactiveLink'}>CONTACT ME</button>
            </div>
        </nav>
    )
}
export default Navbar;