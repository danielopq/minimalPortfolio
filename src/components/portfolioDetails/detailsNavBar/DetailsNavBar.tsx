import './detailsNavBar.css';
import DetailsNavBarButton from '../../shared/detailsNavBarButton/DetailsNavBarButton';

const DetailsNavBar:React.FC = () =>{
    return(
        <nav id="detailsNavBar">
            <DetailsNavBarButton/>
            <div id="detailsNavBarSeparator"></div>
            <DetailsNavBarButton/>
        </nav>
    )
}
export default DetailsNavBar;