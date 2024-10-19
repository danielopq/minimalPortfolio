import './footer.css';

import SocialMedia from '../socialMedia/SocialMedia';

const Footer: React.FC = () => {

    /**
     * Updates the current section state to the selected section.
     * @param {string} section - The section to navigate to.
     */
    const changeSection = (section: string): void => {

    }

    return (
        <footer id='mainFooter'>
            <div id="mainFooterContainer">
                <div id="mainFooterlinks">
                    <button onClick={() => changeSection('home')}>HOME</button>
                    <button onClick={() => changeSection('portfolio')}>PORTFOLIO</button>
                    <button onClick={() => changeSection('contact')}>CONTACT ME</button>
                </div>
                <SocialMedia mode='light'/>
            </div>
        </footer>
    )
}
export default Footer;