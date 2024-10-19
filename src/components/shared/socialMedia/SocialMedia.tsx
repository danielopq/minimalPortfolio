import './socialMedia.css';

interface SocialMediaProps{
    mode: 'dark' | 'light';
}

/**
 * Renders a set of social media icons that link to their respective websites.
 * The icons' appearance can be styled based on the specified mode.
 * 
 * @param {SocialMediaProps} param0 - The props for the SocialMedia component.
 * @param {'dark' | 'light'} param0.mode - Determines the background style of the icons (either dark or light mode).
 * @returns {JSX.Element} A component that displays social media buttons.
 */
const SocialMedia: React.FC<SocialMediaProps> = ({mode}) => {

    /**
    * Opens the specified external website.
    * @param {string} website - The URL of the website to open.
    */
    const loadWebsite = (website: string): void => {
        window.open(website, '_blank');
    }

    return (
        <div id="socialMedia">
            <button id="gitHub-bt" className={`gitHub-bt-${mode}`} onClick={() => loadWebsite('https://github.com/danielopq')}></button>
            <button id="twitter-bt" className={`twitter-bt-${mode}`} onClick={() => loadWebsite('https://twitter.com')}></button>
            <button id="linkedin-bt" className={`linkedin-bt-${mode}`} onClick={() => loadWebsite('https://www.linkedin.com/in/danielmartinezduque')}></button>
        </div>
    )
}
export default SocialMedia;