import './footer.css';
import SocialMedia from '../socialMedia/SocialMedia';

interface FooterProps{
    changeSection:(section:string)=>void;
} 

/**
 * Renders the footer present on all website sections. It serves as a secondary navigation bar and contains links to various social media platforms.
 * @param {FooterProps} param0 - Props for the Footer component.
 * @param {Function} param0.changeSection - Function that allows navigation through different website sections.
 * @returns {JSX.Element} - The rendered footer section.
 */
const Footer: React.FC<FooterProps> = ({changeSection}) => {

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