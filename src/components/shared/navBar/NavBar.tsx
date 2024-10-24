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
    const refMobileNavBar = useRef<HTMLDivElement>(null);

    useEffect(() => {
        changeMenu(selectedSection)
    }, [selectedSection]);

    /**
     * Updates the current section state to the given section.
     * 
     * @param {string} section - The section to set as the current active section.
     */
    const changeMenu = (section: string) => {
        section !== 'details' && setCurrentSection(section);
    }

    /**
     * Toggles the visibility of the mobile navigation bar, updates the icon's appearance, 
     * and controls the scroll behavior of the website.
     */
    const displayMobileNavBar = (): void => {
        if (refIcon.current && refMobileNavBar.current) {
            if (refIcon.current.className === 'mobileMenuIcon-burger') {
                refIcon.current.className = 'mobileMenuIcon-close';
                refMobileNavBar.current.className = 'showMobileNavBar';
                document.body.style.position = 'fixed';
            } else {
                refIcon.current.className = 'mobileMenuIcon-burger';
                refMobileNavBar.current.className = 'hideMobileNavBar';
                document.body.style.position = 'relative';
            }
        }
    }

    /**
     * Handles the click event for navigating to a different section.
     * 
     * @param {string} section - The section to navigate to.
     */
    const handleClick = (section: string):void=>{
        changeSection(section);
        if(refMobileNavBar.current){
            refMobileNavBar.current.className !== 'hideMobileNavBar' &&  displayMobileNavBar();
        }
    }

    return (
        <>
            <nav id="desktopNavBar">
                <menu id="desktopMenu" className="navBarMenu">
                    <button onClick={() => handleClick('home')} className={currentSection === 'home' ? 'navBarActiveLink' : 'navBarInactiveLink'}>HOME</button>
                    <button onClick={() => handleClick('portfolio')} className={currentSection === 'portfolio' ? 'navBarActiveLink' : 'navBarInactiveLink'}>PORTFOLIO</button>
                    <button onClick={() => handleClick('contact')} className={currentSection === 'contact' ? 'navBarActiveLink' : 'navBarInactiveLink'}>CONTACT ME</button>
                </menu>
                <button ref={refIcon} id="navBar-mobileMenuIcon" className='mobileMenuIcon-burger' onClick={displayMobileNavBar}></button>
            </nav>
            <nav ref={refMobileNavBar} id="mobileNavBar" className='hideMobileNavBar'>
                <menu id="mobileMenu" className="navBarMenu">
                    <button onClick={() => handleClick('home')} className={currentSection === 'home' ? 'navBarActiveLink' : 'navBarInactiveLink'}>HOME</button>
                    <button onClick={() => handleClick('portfolio')} className={currentSection === 'portfolio' ? 'navBarActiveLink' : 'navBarInactiveLink'}>PORTFOLIO</button>
                    <button onClick={() => handleClick('contact')} className={currentSection === 'contact' ? 'navBarActiveLink' : 'navBarInactiveLink'}>CONTACT ME</button>
                </menu>
            </nav>
        </>
    )
}
export default Navbar;