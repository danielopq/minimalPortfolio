import './detailsNavBarButton.css';

interface DetailsNavBarButtonProps{
    
}

const DetailsNavBarButton: React.FC<DetailsNavBarButtonProps> = () => {
    return (
        <button className='detailsNavBarButton'>
            <div className='buttonArrowIcon'></div>
            <div className='buttonLegend'></div>
        </button>
    )
}
export default DetailsNavBarButton;