import { useEffect, useRef, useState } from 'react';
import './navBar.css';

interface NavbarProps {
    selectedSection: string;
    changeSection: (section: string) => void;
}

/**
 * Renders the main navigation bar of the website.
 * @param {NavbarProps} param0 - Props for the Navbar component.
 * @param {string} param0.selectedSection - The currently selected section, which determines the active navigation button.
 * @param {function} param0.changeSection - Function to navigate to the specified section of the website.
 * @returns {JSX.Element} The main navigation bar component.
 */
const Navbar: React.FC<NavbarProps> = ({ selectedSection = 'home', changeSection }) => {

    const [currentSection, setCurrentSection] = useState<string>(selectedSection);
    const refIcon = useRef<HTMLButtonElement>(null);
    const refMobileMenu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        changeMenu(selectedSection)
    }, [selectedSection]);

    /**
     * Updates the current section state to the selected section.
     * @param {string} section - The section to navigate to.
     */
    const changeMenu = (section: string) => {
        section !== 'details' && setCurrentSection(section);
    }

    const displayMobileMenu = (): void => {
        if (refIcon.current && refMobileMenu.current) {
            if(refIcon.current.className === 'mobileMenuIcon-burger'){
                refIcon.current.className = 'mobileMenuIcon-close';
                refMobileMenu.current.className='showNavBarMobileMenu';
                document.body.style.position = 'fixed';
            }else{
                refIcon.current.className = 'mobileMenuIcon-burger';
                refMobileMenu.current.className='hideNavBarMobileMenu';
                document.body.style.position = 'relative';
            }
        }
    }

    return (
        <>
            <nav id="navBar">
                <div id="navBarLinks">
                    <button onClick={() => changeSection('home')} className={currentSection === 'home' ? 'navBarActiveLink' : 'navBarInactiveLink'}>HOME</button>
                    <button onClick={() => changeSection('portfolio')} className={currentSection === 'portfolio' ? 'navBarActiveLink' : 'navBarInactiveLink'}>PORTFOLIO</button>
                    <button onClick={() => changeSection('contact')} className={currentSection === 'contact' ? 'navBarActiveLink' : 'navBarInactiveLink'}>CONTACT ME</button>
                </div>
                <button ref={refIcon} id="navBar-mobileMenuIcon" className='mobileMenuIcon-burger' onClick={displayMobileMenu}></button>
            </nav>
            <menu ref={refMobileMenu} id="navBarMobileMenu" className='hideNavBarMobileMenu'>

            </menu>
        </>
    )
}
export default Navbar;