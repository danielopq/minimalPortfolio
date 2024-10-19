import './footer.css';

const Footer: React.FC = () => {

    /**
     * Updates the current section state to the selected section.
     * @param {string} section - The section to navigate to.
     */
    const changeSection = (section: string): void => {

    }

    /**
     * Opens the specified external website.
     * @param {string} website - The URL of the website to open.
     */
    const loadWebsite = (website: string): void => {
        window.open(website, '_blank');
    }

    return (
        <footer id='mainFooter'>
            <div id="mainFooterContainer">
                <div id="mainFooterlinks">
                    <button onClick={() => changeSection('home')}>HOME</button>
                    <button onClick={() => changeSection('portfolio')}>PORTFOLIO</button>
                    <button onClick={() => changeSection('contact')}>CONTACT ME</button>
                </div>
                <div id="mainFooterSocialMedia">
                    <button id="gitHub-bt" onClick={() => loadWebsite('https://github.com/danielopq')}></button>
                    <button id="twitter-bt" onClick={() => loadWebsite('https://twitter.com')}></button>
                    <button id="linkedin-bt" onClick={() => loadWebsite('https://www.linkedin.com/in/danielmartinezduque')}></button>
                </div>
            </div>
        </footer>
    )
}
export default Footer;