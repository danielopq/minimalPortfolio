import './homeHeader.css';
import IconButton from '../../shared/iconButton/IconButton';

/**
 * Displays the header section of the home page..
 * @returns {JSX.Element} The home page header component.
 */
const HomeHeader:React.FC = ()=>{
    return(
        <header id="homeHeader">
            <div>
                <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
                <IconButton value='ABOUT ME'/>
            </div>
        </header>
    )
}
export default HomeHeader;