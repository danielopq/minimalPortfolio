import './portfolioDetails.css';
import { useParams } from 'react-router-dom';
import ProjectDetails from './projectDetails/ProjectDetails';
import DetailsNavBar from './detailsNavBar/DetailsNavBar';
import ContactFooter from '../shared/contactFooter/ContactFooter';

interface PortfolioDetailsProps{
    changeSection:(section:string)=>void
}

/**
 * Renders the details of a specific project.
 * @param {PortfolioDetailsProps} props - The properties for the PortfolioDetails component.
 * @param {function} props.changeSection - Function to navigate to a different section.
 * @returns {JSX.Element} - The rendered PortfolioDetails component.
 */
const PortfolioDetails:React.FC<PortfolioDetailsProps> = ({changeSection})=>{

    const { projectIndex } = useParams<{ projectIndex: string }>();
    const projectIndexNumber = projectIndex ? parseInt(projectIndex, 10) : 0;
    console.log(projectIndexNumber);
    return(
        <main id="portfolioDetails">
            <ProjectDetails projectIndex={projectIndexNumber}/>
            <DetailsNavBar/>
            <ContactFooter changeSection={changeSection}/>
        </main>
    )
}
export default PortfolioDetails