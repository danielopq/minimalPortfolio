import './projectDetails.css';
import StandardButton from '../../shared/standardButton/StandardButton';
import portfolioData, { Project } from '../../shared/portfolioData/portfolioData';

interface ProjectDetailsProps {
    projectIndex: number;
}

/**
 * Displays the detailed information of a specific project.
 * @param {ProjectDetailsProps} param0.projectIndex - Contains the index of the selected project.
 * @returns {JSX.Element} - The rendered component displaying the project's details.
 */
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
                <div id="projectDetails-description">
                    <h3>Project Background</h3>
                    <p className='mainText'>{backgroundText}</p>
                    <h3>Static Previews</h3>
                    <div id="previewPic01" className='previewPic' style={{ backgroundImage: `url("./img/${title}/preview01.jpg")`}}></div>
                    <div id="previewPic02" className='previewPic' style={{ backgroundImage: `url("./img/${title}/preview02.jpg")`}}></div>
                </div>
            </div>
        </section>
    )
}
export default ProjectDetails;