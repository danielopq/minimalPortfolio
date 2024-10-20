import './detailsNavBar.css';
import DetailsNavBarButton from '../../shared/detailsNavBarButton/DetailsNavBarButton';

const DetailsNavBar:React.FC = () =>{
    return(
        <nav id="detailsNavBar">
            <DetailsNavBarButton direction='left' projectTitle={'Manage'} />
            <div id="detailsNavBarSeparator"></div>
            <DetailsNavBarButton direction='right' projectTitle={'Space Tourism'}/>
        </nav>
    )
}
export default DetailsNavBar;