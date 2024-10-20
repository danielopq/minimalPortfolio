import './projectDetails.css';
import StandardButton from '../../shared/standardButton/StandardButton';
import portfolioData, { Project } from '../../shared/portfolioData/portfolioData';

interface ProjectDetailsProps {
    projectIndex: number;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectIndex }) => {

    const currentProject: Project = portfolioData[projectIndex];
    const { title, overviewText, developmentKeyWords, technologyKeyWords, backgroundText, url } = currentProject;

    return (
        <section id="projectDetails">
            <div id="projectDetails-mainPic" style={{ backgroundImage: `url("./img/${title}/details-mainPic.jpg")` }}></div>
            <div id="projectDetails-content">
                <div id="projectDetails-overview">
                    <div>
                        <h2>{title}</h2>
                        <p className='detailsOverviewText'>{overviewText}</p>
                        <p className='keyWords'>{developmentKeyWords}</p>
                        <p className='keyWords'>{technologyKeyWords}</p>
                        <StandardButton value='VIEW WEBSITE' mode='lightButton' />
                    </div>
                </div>
                <div id="projectDetails-description"></div>
            </div>
        </section>
    )
}
export default ProjectDetails;