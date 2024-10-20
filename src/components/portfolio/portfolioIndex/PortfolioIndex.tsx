import './portfolioIndex.css';
import portfolioData from '../portfolioData/portfolioData';
import PortfolioOverview from '../portfolioOverview/PortfolioOverview';


/**
 * Displays a list of project overviews.
 * 
 * This component iterates over the portfolio data and renders 
 * a PortfolioOverview component for each project.
 * 
 * @returns {JSX.Element} - A section containing all PortfolioOverview components.
 */
const PortfolioIndex: React.FC = () => {
    const projectList: JSX.Element[] = [];

    for(let i:number=0;i < portfolioData.length ;i++){
        projectList.push(<PortfolioOverview key={i} title={portfolioData[i].title}  overviewText={portfolioData[i].title} index={i}/>)
    }

    return (
        <section id="portfolioIndex">
            {projectList}
        </section>
    )
}
export default PortfolioIndex