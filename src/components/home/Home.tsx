import HomeHeader from './homeHeader/HomeHeader';
import AboutMe from './aboutMe/AboutMe';
import ContactFooter from '../shared/contactFooter/ContactFooter';

interface HomeProps{
    changeSection:(section:string)=>void;
} 
/**
 * Renders the home page of the website.
 * @param {HomeProps} param0 - Props for the Home component.
 * @param {function} param0.changeSection - Function to navigate to the selected section.
 * @returns {JSX.Element} The home page component.
 */
const Home:React.FC<HomeProps> = ({changeSection}) =>{
    return(
        <main id="home">
            <HomeHeader/>
            <AboutMe changeSection={changeSection}/>
            <ContactFooter changeSection={changeSection}/>
        </main>
    )
}
export default Home;