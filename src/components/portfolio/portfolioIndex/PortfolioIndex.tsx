import './portfolioIndex.css';
import PortfolioOverview from '../portfolioOverview/PortfolioOverview';


const PortfolioIndex:React.FC = () =>{
    return(
        <section id="portfolioIndex">
            <PortfolioOverview />
            <PortfolioOverview />
        </section>
    )
}
export default PortfolioIndex