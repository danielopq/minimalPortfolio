import './portfolioDetails.css';
import ContactFooter from '../shared/contactFooter/ContactFooter';
import DetailsNavBar from './detailsNavBar/DetailsNavBar';

const PortfolioDetails:React.FC = ()=>{
    return(
        <main id="portfolioDetails">
            <DetailsNavBar/>
            <ContactFooter/>
        </main>
    )
}
export default PortfolioDetails