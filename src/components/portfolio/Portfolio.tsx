import ContactFooter from '../shared/contactFooter/ContactFooter';
import PortfolioIndex from './portfolioIndex/PortfolioIndex';


interface PortfolioProps{
    changeSection:(section:string)=>void
}

/**
 * Renders the portfolio section where the user can view the complete personal portfolio.
 * @param {object} param0 - The properties for the Portfolio component.
 * @param {function} param0.changeSection - A function to navigate to a different section.
 * @returns {JSX.Element} - The rendered Portfolio component.
 */
const Portfolio:React.FC<PortfolioProps> = ({changeSection}) => {
    return (
        <main id="portfolio">
            <PortfolioIndex changeSection={changeSection}/>
            <ContactFooter changeSection={changeSection}/>
        </main>
    )
}
export default Portfolio;

