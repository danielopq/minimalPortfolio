import './portfolioDetails.css';
import ProjectDetails from './projectDetails/ProjectDetails';
import DetailsNavBar from './detailsNavBar/DetailsNavBar';
import ContactFooter from '../shared/contactFooter/ContactFooter';

const PortfolioDetails:React.FC = ()=>{
    return(
        <main id="portfolioDetails">
            <ProjectDetails projectIndex={1}/>
            <DetailsNavBar/>
            <ContactFooter/>
        </main>
    )
}
export default PortfolioDetails