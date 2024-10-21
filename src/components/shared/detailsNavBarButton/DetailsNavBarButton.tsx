import { useEffect, useState } from 'react';
import './detailsNavBarButton.css';

interface DetailsNavBarButtonProps {
    direction: 'left' | 'right';
    projectTitle: string | undefined;
    handleClick: (selectedProject?: number) => void;
}

/**
 * Renders a navigation button used within the detailsNavBar. The button changes based on the specified direction, 
 * displaying the appropriate label and adjusting the layout for navigating between projects.
 * 
 * @param {DetailsNavBarButtonProps} param0 - The properties for configuring the navigation button.
 * @param {'left' | 'right'} param0.direction - Direction of navigation. Sets the arrow direction, modifies the legend and adjusts the flex direction. 
 * @param {string } param0.projectTitle - The title of the project to be displayed on the button.
 * @param {boolean} [param0.disabled=false] - Indicates whether the button is disabled. When true, the button is not interactive.
 * @param {function} param0.handleClick - The function to be called when the button is clicked, passing the selected project's index.
 * @returns {JSX.Element} - The JSX element representing the navigation button in the detailsNavBar.
 */
const DetailsNavBarButton: React.FC<DetailsNavBarButtonProps> = ({ direction, projectTitle, handleClick }) => {
    const [disabled,setDisabled] = useState<boolean>(false)
    useEffect(()=>{
        projectTitle === '' ? setDisabled(true) : setDisabled(false);  
    },[projectTitle])
    return (
        <button className={`detailsNavBarButton ${direction}Direction`} disabled={disabled} onClick={() => handleClick()}>
            <div className={`buttonArrowIcon ${direction}ArrowIcon`}></div>
            <div className='buttonLegend'>
                <p className='legendProjectTitle'>{projectTitle}</p>
                <p className='legendProjectDirection'>{direction === 'left' ? 'Previous Project' : 'Next Project'}</p>
            </div>
        </button>
    )
}
export default DetailsNavBarButton;