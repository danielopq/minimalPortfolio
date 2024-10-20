import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./components/shared/navBar/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import ContactMe from "./components/contactMe/ContactMe";
import PortfolioDetails from './components/portfolioDetails/PortfolioDetails';
import Footer from "./components/shared/footer/Footer";

const PortFolioApp: React.FC = () => {

    const navigate = useNavigate();

    /**
     * Navigates to the specified section.
     * @param {string} section - The path of the section to navigate to.
     */
    const changeSection = (section: string): void => {
        navigate(section);
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/details" element={<PortfolioDetails />} />
                <Route path="/contact" element={<ContactMe />} />
            </Routes>
            <Footer changeSection={changeSection}/>
        </>

    )
}
export default PortFolioApp