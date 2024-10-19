import HomeHeader from './homeHeader/HomeHeader';
import AboutMe from './aboutMe/AboutMe';
import ContactFooter from '../shared/contactFooter/ContactFooter';

const Home:React.FC = () =>{
    return(
        <main id="home">
            <HomeHeader/>
            <AboutMe/>
            <ContactFooter />
        </main>
    )
}
export default Home;