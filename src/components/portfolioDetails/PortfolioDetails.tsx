import './portfolioDetails.css';
import { useParams } from 'react-router-dom';
import ProjectDetails from './projectDetails/ProjectDetails';
import DetailsNavBar from './detailsNavBar/DetailsNavBar';
import ContactFooter from '../shared/contactFooter/ContactFooter';
import { useState } from 'react';

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

    const { index } = useParams<{ index: string }>();
    const projectIndex = index ? parseInt(index, 10) : 0;

    const [currentProject,setCurrentProject] = useState<number>(projectIndex);
    
    const displayProject = (selectedProject:number):void=>{
        setCurrentProject(selectedProject);
    }



    return(
        <main id="portfolioDetails">
            <ProjectDetails projectIndex={currentProject}/>
            <DetailsNavBar projectIndex={currentProject} displayProject={displayProject}/>
            <ContactFooter changeSection={changeSection}/>
        </main>
    )
}
export default PortfolioDetails