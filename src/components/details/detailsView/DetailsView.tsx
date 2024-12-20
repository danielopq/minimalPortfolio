import './detailsView.css';
import StandardButton from '../../shared/standardButton/StandardButton';
import portfolioData, { Project } from '../../shared/portfolioData/portfolioData';
import { loadWebsite } from '../../utils/utils';

interface DetailsViewProps {
    projectIndex: number;
}

/**
 * Displays the detailed information of a specific project.
 * @param {DetailsViewProps} param0.projectIndex - Contains the index of the selected project.
 * @returns {JSX.Element} - The rendered component displaying the project's details.
 */
const DetailsView: React.FC<DetailsViewProps> = ({ projectIndex }) => {

    const currentProject: Project = portfolioData[projectIndex];
    const { title, overviewText, developmentKeyWords, technologyKeyWords, backgroundText, url } = currentProject;

    return (
        <section id="detailsView">
            <div id="detailsView-mainPic" style={{ backgroundImage: `url("/img/${title}/details-mainPic.jpg")` }}></div>
            <div id="detailsView-content">
                <div id="detailsView-overview">
                    <h2 id="detailsView-overview-title">{title}</h2>
                    <p id="detailsView-overview-text" className='mainText'>{overviewText}</p>
                    <div id="detailsView-overview-keyWords">
                        <p className='keyWords'>{developmentKeyWords}</p>
                        <p className='keyWords'>{technologyKeyWords}</p>
                        <StandardButton value='VIEW WEBSITE' mode='lightButton' handleClick={() => loadWebsite(url)} />
                    </div>
                </div>
                <div id="detailsView-description">
                    <h3>Project Background</h3>
                    <p className='mainText'>{backgroundText}</p>
                    <h3>Static Previews</h3>
                    <div id="previewPic01" className='previewPic' style={{ backgroundImage: `url("/img/${title}/preview01.jpg")` }}></div>
                    <div id="previewPic02" className='previewPic' style={{ backgroundImage: `url("/img/${title}/preview02.jpg")` }}></div>
                </div>
            </div>
        </section>
    )
}
export default DetailsView;