import useComponentLoader from '../utils/loader';
import ContactFooter from '../shared/contactFooter/ContactFooter';
import PortfolioIndex from './portfolioIndex/PortfolioIndex';


interface PortfolioProps {
    changeSection: (section: string) => void
}

/**
 * Renders the portfolio section where the user can view the complete personal portfolio.
 * @param {object} param0 - The properties for the Portfolio component.
 * @param {function} param0.changeSection - A function to navigate to a different section.
 * @returns {JSX.Element} - The rendered Portfolio component.
 */
const Portfolio: React.FC<PortfolioProps> = ({ changeSection }) => {
    const { loading, progress, componentRef } = useComponentLoader();
    return (
        <main id="portfolio">
            {loading ? (
                <div style={{ textAlign: 'center' }}>
                    <p>Cargando... {Math.round(progress)}%</p>
                    <div style={{ width: '80%', height: '10px', backgroundColor: '#ddd', margin: '10px auto', borderRadius: '5px', }}>
                        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#4caf50', borderRadius: '5px', transition: 'width 0.3s', }} />
                    </div>
                </div>
            ) : (

                <div ref={componentRef}>
                    <PortfolioIndex changeSection={changeSection} />
                </div>
            )}
            <ContactFooter changeSection={changeSection} />
        </main>
    )
}
export default Portfolio;

