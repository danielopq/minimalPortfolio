import './detailsNavBarButton.css';

interface DetailsNavBarButtonProps{
    direction: 'left' | 'right';
    projectTitle: string;
    disabled?:boolean;
}

/**
 * Renders a navigation button used in the detailsNavBar. The button changes based on the specified navigation direction, 
 * displaying either the previous or next project relative to the current one.
 * 
 * @param {DetailsNavBarButtonProps} param0 - The properties for configuring the button.
 * @param {string} param0.direction - Direction of navigation. This sets the arrow direction, modifies the legend and adjusts the flex direction.
 * @param {string} param0.projectTitle - The title of the project to be displayed on the button.
 * @param {boolean} [param0.disabled=false] - If true, the button is disabled and cannot be interacted with.
 * @returns {JSX.Element} - The detailsNavBar navigation button component.
 */
const DetailsNavBarButton: React.FC<DetailsNavBarButtonProps> = ({direction,projectTitle,disabled=false}) => {
    return (
        <button className={`detailsNavBarButton ${direction}Direction`} disabled={disabled}>
            <div className={`buttonArrowIcon ${direction}ArrowIcon`}></div>
            <div className='buttonLegend'>
                <p className='legendProjectTitle'>{projectTitle}</p>
                <p className='legendProjectDirection'>{direction === 'left' ? 'Previous Project' : 'Next Project'}</p>
            </div>
        </button>
    )
}
export default DetailsNavBarButton;