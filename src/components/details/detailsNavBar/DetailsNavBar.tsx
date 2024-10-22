import './detailsNavBar.css';
import DetailsNavBarButton from '../../shared/detailsNavBarButton/DetailsNavBarButton';
import portfolioData from '../../shared/portfolioData/portfolioData';
import { useEffect, useState } from 'react';

interface DetailsNavBarProps {
    projectIndex: number;
    displayProject: (projectIndex: number) => void
}

const DetailsNavBar: React.FC<DetailsNavBarProps> = ({ projectIndex, displayProject }) => {
    const [currentProject, setCurrentProject] = useState<number>(projectIndex);
    const [projectTitles, setProjectTitles] = useState({ previousTitle: '', nextTitle: '' })
    const { previousTitle, nextTitle } = projectTitles;

    useEffect(() => {
        navigateProjects(projectIndex);
    }, [projectIndex])

    const navigateProjects = (selectedProject: number) => {
        if (selectedProject === 0) {
            setProjectTitles({ previousTitle: '', nextTitle: portfolioData[selectedProject + 1].title })
        } else if (selectedProject === portfolioData.length - 1) {
            setProjectTitles({ previousTitle: portfolioData[selectedProject - 1].title, nextTitle: '' })
        } else {
            setProjectTitles({ previousTitle: portfolioData[selectedProject - 1].title, nextTitle: portfolioData[selectedProject + 1].title })
        }
        displayProject(selectedProject);
        setCurrentProject(selectedProject);
    }

    return (
        <nav id="detailsNavBar">
            <DetailsNavBarButton direction='left' projectTitle={previousTitle} handleClick={() => navigateProjects(currentProject - 1)} />
            <div id="detailsNavBarSeparator"></div>
            <DetailsNavBarButton direction='right' projectTitle={nextTitle} handleClick={() => navigateProjects(currentProject + 1)} />
        </nav>
    )
}
export default DetailsNavBar;