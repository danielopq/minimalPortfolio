import './socialMedia.css';

const SocialMedia: React.FC = () => {

    /**
    * Opens the specified external website.
    * @param {string} website - The URL of the website to open.
    */
    const loadWebsite = (website: string): void => {
        window.open(website, '_blank');
    }

    return (
        <div id="socialMedia">
            <button id="gitHub-bt" onClick={() => loadWebsite('https://github.com/danielopq')}></button>
            <button id="twitter-bt" onClick={() => loadWebsite('https://twitter.com')}></button>
            <button id="linkedin-bt" onClick={() => loadWebsite('https://www.linkedin.com/in/danielmartinezduque')}></button>
        </div>
    )
}
export default SocialMedia;