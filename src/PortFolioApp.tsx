import Navbar from "./components/shared/navBar/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/shared/footer/Footer";

const PortFolioApp: React.FC = () => {
    return (
        <>
            <Navbar />
            {/* <Home /> */}
            <Portfolio />
            {/* <ContactMe /> */}
            <Footer />
        </>

    )
}
export default PortFolioApp