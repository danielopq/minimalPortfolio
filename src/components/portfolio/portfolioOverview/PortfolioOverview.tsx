import './portfolioOverview.css';
import StandardButton from '../../shared/standardButton/StandardButton';

const PortfolioOverview: React.FC = () => {
    return (
        <section className="overview rightSide">
            <div className="overview-mainPic"></div>
            <div className="overview-mainContent">
                <div>
                    <h2>Manage</h2>
                    <p className='mainText'>
                        This project required me to build a fully responsive
                        landing page to the designs provided. I used HTML5,
                        along with CSS Grid and JavaScript for the areas that
                        required interactivity, such as the testimonial slider.
                    </p>
                    <StandardButton value='VIEW PROJECT' mode='lightButton' />
                </div>
            </div>
        </section>
    )
}
export default PortfolioOverview;