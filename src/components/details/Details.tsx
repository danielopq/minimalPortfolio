import { useParams } from 'react-router-dom';
import DetailsView from './detailsView/DetailsView';
import DetailsNavBar from './detailsNavBar/DetailsNavBar';
import ContactFooter from '../shared/contactFooter/ContactFooter';
import { useState } from 'react';

interface DetailsProps{
    changeSection:(section:string)=>void
}

/**
 * Renders the details of a specific project.
 * @param {DetailsProps} props - The properties for the Details component.
 * @param {function} props.changeSection - Function to navigate to a different section.
 * @returns {JSX.Element} - The rendered Details component.
 */
const Details:React.FC<DetailsProps> = ({changeSection})=>{

    const { index } = useParams<{ index: string }>();
    const projectIndex = index ? parseInt(index, 10) : 0;

    const [currentProject,setCurrentProject] = useState<number>(projectIndex);
    
    const displayProject = (selectedProject:number):void=>{
        setCurrentProject(selectedProject);
    }

    return(
        <main id="Details">
            <DetailsView projectIndex={currentProject}/>
            <DetailsNavBar projectIndex={currentProject} displayProject={displayProject}/>
            <ContactFooter changeSection={changeSection}/>
        </main>
    )
}
export default Details