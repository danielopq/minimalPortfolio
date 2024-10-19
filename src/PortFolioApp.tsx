import Navbar from "./components/shared/navBar/NavBar";
import Home from "./components/home/Home";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/shared/footer/Footer";

const PortFolioApp: React.FC = () => {
    return (
        <>
            <Navbar />
            {/* <Home /> */}
            <ContactMe />
            <Footer />
        </>

    )
}
export default PortFolioApp