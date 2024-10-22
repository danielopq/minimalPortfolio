import './portfolioOverview.css';
import StandardButton from '../../shared/standardButton/StandardButton';
import portfolioData from '../../shared/portfolioData/portfolioData';

interface PortfolioOverviewProps {
    index: number;
    changeSection:(section:string)=>void
}

/**
 * Renders a component that displays an overview of a project, including an image, title, description, 
 * and a button to access the project details.
 * @param {PortfolioOverviewProps} param0 - The properties for the component.
 * @param {number} param0.index - The index of the project in the portfolioData array.
 * @param {function} param0.changeSection - A function to navigate to the specified section.
 * @returns {JSX.Element} - The PortfolioOverview component.
 */
const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({index, changeSection }) => {

    const{title,overviewText} = portfolioData[index];

    return (
        <section className={(index % 2) == 0 ? 'overview leftSide' : 'overview rightSide'} >
            <div className="overview-mainPic" style={{ backgroundImage: `url("./img/${title}/overview-mainpic.jpg")`}}></div>
            <div className="overview-mainContent">
                <div>
                    <h2>{title}</h2>
                    <p className='mainText'>{overviewText}</p>
                    <StandardButton value='VIEW PROJECT' mode='lightButton' handleClick={()=>changeSection(`details/${index}`)}/>
                </div>
            </div>
        </section>
    )
}
export default PortfolioOverview;