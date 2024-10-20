import './portfolioOverview.css';
import StandardButton from '../../shared/standardButton/StandardButton';

interface PortfolioOverview {
    title:string;
    overviewText:string;
    index:number;
}

const PortfolioOverview: React.FC<PortfolioOverview> = ({title,overviewText,index}) => {
    return (
        <section className={(index % 2) == 0 ? 'overview leftSide' : 'overview rightSide'} >
            <div className="overview-mainPic"></div>
            <div className="overview-mainContent">
                <div>
                    <h2>{title}</h2>
                    <p className='mainText'>{overviewText}</p>
                    <StandardButton value='VIEW PROJECT' mode='lightButton' />
                </div>
            </div>
        </section>
    )
}
export default PortfolioOverview;