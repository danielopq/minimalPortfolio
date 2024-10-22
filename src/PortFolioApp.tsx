import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./components/shared/navBar/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import ContactMe from "./components/contactMe/ContactMe";
import Details from './components/details/Details';
import Footer from "./components/shared/footer/Footer";
import { useState } from 'react';

const PortFolioApp: React.FC = () => {
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState<string>('home')

    /**
     * Navigates to the specified section.
     * @param {string} section - The path of the section to navigate to.
     */
    const changeSection = (section:string): void => {
        section === 'home' ? navigate('/') : navigate(`/${section}`);
        setCurrentSection(section);
    }

    return (
        <>
            <Navbar selectedSection={currentSection} changeSection={changeSection} />
            <Routes>
                <Route path="/" element={<Home changeSection={changeSection}/>} />
                <Route path="/portfolio" element={<Portfolio changeSection={changeSection}/>} />
                <Route path="/details/:index" element={<Details changeSection={changeSection} />} />
                <Route path="/contact" element={<ContactMe />} />
            </Routes>
            <Footer changeSection={changeSection} />
        </>

    )
}
export default PortFolioApp