import './home.css';
import HomeHeader from './homeHeader/HomeHeader';
import AboutMe from './aboutMe/AboutMe';

const Home:React.FC = () =>{
    return(
        <main id="home">
            <HomeHeader/>
            <AboutMe/>
        </main>
    )
}
export default Home;